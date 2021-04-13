import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';
import { Role } from 'src/app/core/models/role';
import { LoginService } from 'src/app/services/seguridad/login-service';
import { UsuarioStorageService } from 'src/app/services/seguridad/usuario-storage-service';
import { ResponseService } from 'src/app/Models/response/response-service';
import { UsuarioElement } from 'src/app/interfaces/usuario-element';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  authForm: FormGroup;
  submitted = false;
  error = '';
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private loginService: LoginService,
    private userStorageService: UsuarioStorageService
  ) {}
  ngOnInit() {
    this.authForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

  }
 get f() {
    return this.authForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.error = '';
    if (this.authForm.invalid) {
      this.error = 'Username and Password not valid !';
      return;
    } else {
      console.log('AUTENTICACION');
      this.loginService.post({nombreUsuario : this.f.username.value, contrasena: this.f.password.value})
      .subscribe( (responseModel: ResponseService) => {
        //let isUserAuthenticaded = this.compararPasswords(responseModel.data[0].contrasena, this.f.password.value);
        let data : [] = responseModel.data;
        console.log(responseModel);
        if(data.length == 0){
          this.error = 'Usuario y/o contraseña incorrectos';
        }
        else{
          let usuario : UsuarioElement = responseModel.data[0];
          this.userStorageService.enviarUsuario(responseModel);
          let role = usuario.nombreRol;
          if(role === "ADMINISTRADOR"){
             this.router.navigate(['/admin']);
          }
          if(role === "TESORERIA"){
            this.router.navigate(['/tesoreria']);
          }
         
        }
        
      }, (error) => {
        console.log(error);
        this.error = 'Hubo un  error al intentar conectarse con el servidor';
      })

      // this.authService
      //   .login(this.f.username.value, this.f.password.value)
      //   .subscribe(
      //     (res) => {
      //       if (res) {
      //         const role = this.authService.currentUserValue.role;
      //         if (role === Role.All || role === Role.Admin) {
      //           this.router.navigate(['/admin/dashboard/main']);
      //         } else if (role === Role.Teacher) {
      //           this.router.navigate(['/teacher/dashboard']);
      //         } else if (role === Role.Student) {
      //           this.router.navigate(['/student/dashboard']);
      //         }
      //          else if (role === Role.Tutor) {
      //           this.router.navigate(['/tutor/dashboard']);
      //         }

      //         else {
      //           this.router.navigate(['/authentication/signin']);
      //         }
      //       } else {
      //         this.error = 'Invalid Login';
      //       }
      //     },
      //     (error) => {
      //       this.error = error;
      //       this.submitted = false;
      //     }
      //   );
    }
  }

}
