import { RouteInfo } from './sidebar.metadata';
export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'Menú',
    moduleName: '',
    iconType: '',
    icon: '',
    class: '',
    groupTitle: true,
    badge: '',
    badgeClass: '',
    role: ['All'],
    submenu: [],
  },

  // Admin Dasboard
  {
    path: '',
    title: 'Inicio',
    moduleName: 'dashboard',
    iconType: 'material-icons-two-tone',
    icon: 'home',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['ADMINISTRADOR'],
    submenu: [
      {
        path: '/admin/dashboard/main',
        title: 'Tablero Principal',
        moduleName: 'dashboard',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['ADMINISTRADOR'],
        submenu: [],
      },
    ],
  },
  //Admin
  {
    path: '',
    title: 'Directiva',
    moduleName: 'asistente',
    iconType: 'material-icons-two-tone',
    icon: 'school',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['ADMINISTRADOR'],
    submenu: [
      {
        path: '/admin/asistente/main',
        title: 'Asistente Académico',
        moduleName: 'asistente',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/areas/main',
        title: 'Áreas',
        moduleName: 'areas',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/asignaturas/main',
        title: 'Asignaturas',
        moduleName: 'asignaturas',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      }
    ],
  },
    //Tesoreria
    {
      path: '',
      title: 'Tesoreria',
      moduleName: 'tesoreria',
      iconType: 'material-icons-two-tone',
      icon: 'money',
      class: 'menu-toggle',
      groupTitle: false,
      badge: '',
      badgeClass: '',
      role: ['TESORERIA'],
      submenu: [
        {
          path: '/tesoreria/empresa/main',
          title: 'Empresa',
          moduleName: 'empresa',
          iconType: '',
          icon: '',
          class: 'ml-menu',
          groupTitle: false,
          badge: '',
          badgeClass: '',
          role: [''],
          submenu: [],
        }
      ],
    },

  // Teacher Modules

  {
    path: '/teacher/dashboard',
    title: 'Dashboard',
    moduleName: 'dashboard',
    iconType: 'material-icons-two-tone',
    icon: 'home',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Teacher'],
    submenu: [],
  },

  // Student Modules

  {
    path: '/student/dashboard',
    title: 'Dashboard',
    moduleName: 'dashboard',
    iconType: 'material-icons-two-tone',
    icon: 'home',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Student'],
    submenu: [],
  },

    // Tutor Modules

    {
      path: '/tutor/dashboard',
      title: 'Dashboard',
      moduleName: 'dashboard',
      iconType: 'material-icons-two-tone',
      icon: 'home',
      class: '',
      groupTitle: false,
      badge: '',
      badgeClass: '',
      role: ['Tutor'],
      submenu: [],
    },

  // Common Module

 /* {
    path: '',
    title: 'Authentication',
    moduleName: 'authentication',
    iconType: 'material-icons-two-tone',
    icon: 'supervised_user_circle',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/authentication/signin',
        title: 'Sign In',
        moduleName: 'authentication',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/authentication/signup',
        title: 'Sign Up',
        moduleName: 'authentication',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/authentication/forgot-password',
        title: 'Forgot Password',
        moduleName: 'authentication',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/authentication/locked',
        title: 'Locked',
        moduleName: 'authentication',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/authentication/page404',
        title: '404 - Not Found',
        moduleName: 'authentication',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/authentication/page500',
        title: '500 - Server Error',
        moduleName: 'authentication',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
    ],
  },
  {
    path: '',
    title: 'Extra Pages',
    moduleName: 'extra-pages',
    iconType: 'material-icons-two-tone',
    icon: 'description',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/extra-pages/blank',
        title: 'Blank Page',
        moduleName: 'extra-pages',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
    ],
  },
  {
    path: '',
    title: 'Multi level Menu',
    moduleName: 'multilevel',
    iconType: 'material-icons-two-tone',
    icon: 'slideshow',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/multilevel/first1',
        title: 'First',
        moduleName: 'multilevel',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/',
        title: 'Second',
        moduleName: 'secondlevel',
        iconType: '',
        icon: '',
        class: 'ml-sub-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [
          {
            path: '/multilevel/secondlevel/second1',
            title: 'Second 1',
            moduleName: 'secondlevel',
            iconType: '',
            icon: '',
            class: 'ml-sub-sub-menu',
            groupTitle: false,
            badge: '',
            badgeClass: '',
            role: [''],
            submenu: [],
          },
          {
            path: '/multilevel/secondlevel/second2',
            title: 'Second 2',
            moduleName: 'secondlevel',
            iconType: '',
            icon: '',
            class: 'ml-sub-sub-menu',
            groupTitle: false,
            badge: '',
            badgeClass: '',
            role: [''],
            submenu: [],
          },
        ],
      },
      {
        path: '/multilevel/first3',
        title: 'Third',
        moduleName: 'multilevel',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
    ],
  },
  {
    path: '/authentication/signin',
    title: 'Logout',
    moduleName: 'logout',
    iconType: 'material-icons-two-tone',
    icon: 'power_settings_new',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['All'],
    submenu: [],
  },*/
];
