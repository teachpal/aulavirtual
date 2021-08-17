SET IDENTITY_INSERT [dbo].[tvcEstatus] ON 

INSERT [dbo].[tvcEstatus] ([IdEstatus], [Nombre], [TablaUso]) VALUES (1, N'Activo', N'Catalogos')
INSERT [dbo].[tvcEstatus] ([IdEstatus], [Nombre], [TablaUso]) VALUES (2, N'Bloqueado', N'Catalogos')
INSERT [dbo].[tvcEstatus] ([IdEstatus], [Nombre], [TablaUso]) VALUES (3, N'Entregado', N'Tareas / Investigaciones')
INSERT [dbo].[tvcEstatus] ([IdEstatus], [Nombre], [TablaUso]) VALUES (4, N'No Entregado', N'Tareas / Investigaciones')
INSERT [dbo].[tvcEstatus] ([IdEstatus], [Nombre], [TablaUso]) VALUES (5, N'Publicado', N'Quiz')
INSERT [dbo].[tvcEstatus] ([IdEstatus], [Nombre], [TablaUso]) VALUES (6, N'No Publicado', N'Quiz')
INSERT [dbo].[tvcEstatus] ([IdEstatus], [Nombre], [TablaUso]) VALUES (7, N'No Realizado', N'Quiz')
INSERT [dbo].[tvcEstatus] ([IdEstatus], [Nombre], [TablaUso]) VALUES (8, N'Realizado', N'Quiz')
INSERT [dbo].[tvcEstatus] ([IdEstatus], [Nombre], [TablaUso]) VALUES (9, N'Visto', N'Notificacion')
INSERT [dbo].[tvcEstatus] ([IdEstatus], [Nombre], [TablaUso]) VALUES (10, N'No Visto', N'Notificacion')
SET IDENTITY_INSERT [dbo].[tvcEstatus] OFF
GO
SET IDENTITY_INSERT [dbo].[tvcRecursos] ON 

INSERT [dbo].[tvcRecursos] ([IdRecurso], [IdEstatus], [Nombre], [Descripcion], [Icono]) VALUES (1, 1, N'Anuncios / Instrucciones', N'', N'/Imagenes/recurso/anuncionew.png')
INSERT [dbo].[tvcRecursos] ([IdRecurso], [IdEstatus], [Nombre], [Descripcion], [Icono]) VALUES (2, 1, N'Archivos', N'', N'/Imagenes/recurso/archivonew.png')
INSERT [dbo].[tvcRecursos] ([IdRecurso], [IdEstatus], [Nombre], [Descripcion], [Icono]) VALUES (3, 1, N'VideoConferencias', N'', N'/Imagenes/recurso/ICONO_ZOOM_INT.png')
INSERT [dbo].[tvcRecursos] ([IdRecurso], [IdEstatus], [Nombre], [Descripcion], [Icono]) VALUES (4, 1, N'Tarea', N'', N'/Imagenes/recurso/tareanew.png')
INSERT [dbo].[tvcRecursos] ([IdRecurso], [IdEstatus], [Nombre], [Descripcion], [Icono]) VALUES (5, 1, N'Quiz', N'', N'/Imagenes/recurso/examennew.png')
INSERT [dbo].[tvcRecursos] ([IdRecurso], [IdEstatus], [Nombre], [Descripcion], [Icono]) VALUES (6, 1, N'Foros', N'', N'/Imagenes/recurso/foronew.png')
INSERT [dbo].[tvcRecursos] ([IdRecurso], [IdEstatus], [Nombre], [Descripcion], [Icono]) VALUES (7, 1, N'Videos', N'', N'/Imagenes/recurso/videonew.png')
INSERT [dbo].[tvcRecursos] ([IdRecurso], [IdEstatus], [Nombre], [Descripcion], [Icono]) VALUES (8, 1, N'Imagen', N'', N'/Imagenes/recurso/imagennew.png')
INSERT [dbo].[tvcRecursos] ([IdRecurso], [IdEstatus], [Nombre], [Descripcion], [Icono]) VALUES (9, 1, N'URL ', N'', N'/Imagenes/recurso/urlnew.png')
SET IDENTITY_INSERT [dbo].[tvcRecursos] OFF
GO
SET IDENTITY_INSERT [dbo].[tvcSecciones] ON 

INSERT [dbo].[tvcSecciones] ([IdSeccion], [Nombre], [Descripcion], [Obligatorio], [Icono]) VALUES (1, N'Aprendizaje en clase', N'', 1, N'assignment')
INSERT [dbo].[tvcSecciones] ([IdSeccion], [Nombre], [Descripcion], [Obligatorio], [Icono]) VALUES (2, N'Actividades', N'', 1, N'class')
INSERT [dbo].[tvcSecciones] ([IdSeccion], [Nombre], [Descripcion], [Obligatorio], [Icono]) VALUES (3, N'Misión', N'', 1, N'receipt')
INSERT [dbo].[tvcSecciones] ([IdSeccion], [Nombre], [Descripcion], [Obligatorio], [Icono]) VALUES (4, N'Investigación', N'', 0, N'description')
INSERT [dbo].[tvcSecciones] ([IdSeccion], [Nombre], [Descripcion], [Obligatorio], [Icono]) VALUES (5, N'Material Apoyo', N'', 1, N'book')
INSERT [dbo].[tvcSecciones] ([IdSeccion], [Nombre], [Descripcion], [Obligatorio], [Icono]) VALUES (6, N'Tareas / Investigaciones', N'', 1, N'description')
INSERT [dbo].[tvcSecciones] ([IdSeccion], [Nombre], [Descripcion], [Obligatorio], [Icono]) VALUES (7, N'Quiz', N'', 1, N'assignment')
INSERT [dbo].[tvcSecciones] ([IdSeccion], [Nombre], [Descripcion], [Obligatorio], [Icono]) VALUES (8, N'Recursos', N'', 0, N'folder')
INSERT [dbo].[tvcSecciones] ([IdSeccion], [Nombre], [Descripcion], [Obligatorio], [Icono]) VALUES (9, N'Lecturas', N'', 0, N'import_contacts')
INSERT [dbo].[tvcSecciones] ([IdSeccion], [Nombre], [Descripcion], [Obligatorio], [Icono]) VALUES (10, N'Foro', N'', 0, N'question_answer')
SET IDENTITY_INSERT [dbo].[tvcSecciones] OFF
GO
SET IDENTITY_INSERT [dbo].[tvcTipo_Pregunta] ON 

INSERT [dbo].[tvcTipo_Pregunta] ([IdTipoPregunta], [Nombre]) VALUES (1, N'Opción múltiple, Única Respuesta')
INSERT [dbo].[tvcTipo_Pregunta] ([IdTipoPregunta], [Nombre]) VALUES (2, N'Opción múltiple, Múltiple Respuesta')
INSERT [dbo].[tvcTipo_Pregunta] ([IdTipoPregunta], [Nombre]) VALUES (3, N'Verdadero o Falso')
INSERT [dbo].[tvcTipo_Pregunta] ([IdTipoPregunta], [Nombre]) VALUES (4, N'Relacional')
INSERT [dbo].[tvcTipo_Pregunta] ([IdTipoPregunta], [Nombre]) VALUES (5, N'Argumentativa')
INSERT [dbo].[tvcTipo_Pregunta] ([IdTipoPregunta], [Nombre]) VALUES (6, N'Voz')
SET IDENTITY_INSERT [dbo].[tvcTipo_Pregunta] OFF
GO
SET IDENTITY_INSERT [dbo].[tvcTipoExamen] ON 

INSERT [dbo].[tvcTipoExamen] ([IdTipoExamen], [Nombre]) VALUES (1, N'Cognitivo')
INSERT [dbo].[tvcTipoExamen] ([IdTipoExamen], [Nombre]) VALUES (2, N'Diagnóstico')
SET IDENTITY_INSERT [dbo].[tvcTipoExamen] OFF
GO

SET IDENTITY_INSERT [dbo].[tvcCompetencias] ON 

INSERT [dbo].[tvcCompetencias] ([IdCompetencia], [Nombre]) VALUES (1, N'Linguística')
INSERT [dbo].[tvcCompetencias] ([IdCompetencia], [Nombre]) VALUES (2, N'Matemáticas')
INSERT [dbo].[tvcCompetencias] ([IdCompetencia], [Nombre]) VALUES (3, N'Mundo Físico')
INSERT [dbo].[tvcCompetencias] ([IdCompetencia], [Nombre]) VALUES (4, N'Social')
INSERT [dbo].[tvcCompetencias] ([IdCompetencia], [Nombre]) VALUES (5, N'Autonomía e Iniciativa Personal')
INSERT [dbo].[tvcCompetencias] ([IdCompetencia], [Nombre]) VALUES (6, N'Digital')
INSERT [dbo].[tvcCompetencias] ([IdCompetencia], [Nombre]) VALUES (7, N'Artística')
INSERT [dbo].[tvcCompetencias] ([IdCompetencia], [Nombre]) VALUES (8, N'Pensamiento Crítico')
INSERT [dbo].[tvcCompetencias] ([IdCompetencia], [Nombre]) VALUES (9, N'Pensamiento Lógico')
INSERT [dbo].[tvcCompetencias] ([IdCompetencia], [Nombre]) VALUES (10, N'Análisis y proceso de Información')
INSERT [dbo].[tvcCompetencias] ([IdCompetencia], [Nombre]) VALUES (11, N'Competenia 1')
SET IDENTITY_INSERT [dbo].[tvcCompetencias] OFF
GO
SET IDENTITY_INSERT [dbo].[tvcTipoNotificacion] ON 

INSERT [dbo].[tvcTipoNotificacion] ([IdTipoNotificacion], [Nombre]) VALUES (1, N'Clonar recurso')
INSERT [dbo].[tvcTipoNotificacion] ([IdTipoNotificacion], [Nombre]) VALUES (2, N'Retroalimentación tarea')
SET IDENTITY_INSERT [dbo].[tvcTipoNotificacion] OFF
GO

SET IDENTITY_INSERT [dbo].[tvcTipoArchivo] ON 

INSERT [dbo].[tvcTipoArchivo] ([IdTipoArchivo], [Nombre], [Extensiones]) VALUES (1, N'PDF', N'.pdf')
INSERT [dbo].[tvcTipoArchivo] ([IdTipoArchivo], [Nombre], [Extensiones]) VALUES (2, N'Imagenes JPG', N'.jpg')
INSERT [dbo].[tvcTipoArchivo] ([IdTipoArchivo], [Nombre], [Extensiones]) VALUES (3, N'Imagenes PNG', N'.png')
INSERT [dbo].[tvcTipoArchivo] ([IdTipoArchivo], [Nombre], [Extensiones]) VALUES (4, N'Imagenes JPEG', N'.jpeg')
INSERT [dbo].[tvcTipoArchivo] ([IdTipoArchivo], [Nombre], [Extensiones]) VALUES (5, N'Archivo WORD', N'.docx')
INSERT [dbo].[tvcTipoArchivo] ([IdTipoArchivo], [Nombre], [Extensiones]) VALUES (6, N'Archivo WORD 2007', N'.doc')
INSERT [dbo].[tvcTipoArchivo] ([IdTipoArchivo], [Nombre], [Extensiones]) VALUES (7, N'Archivo PowerPoint', N'.ppsx')
INSERT [dbo].[tvcTipoArchivo] ([IdTipoArchivo], [Nombre], [Extensiones]) VALUES (8, N'Archivo PowerPoint 2007', N'.pot')
INSERT [dbo].[tvcTipoArchivo] ([IdTipoArchivo], [Nombre], [Extensiones]) VALUES (9, N'Plantilla PowerPoint ', N'.potx')
INSERT [dbo].[tvcTipoArchivo] ([IdTipoArchivo], [Nombre], [Extensiones]) VALUES (10, N'Presentación PowerPoint', N'.pptx')
INSERT [dbo].[tvcTipoArchivo] ([IdTipoArchivo], [Nombre], [Extensiones]) VALUES (11, N'Archivo Excel', N'.xlsx')
INSERT [dbo].[tvcTipoArchivo] ([IdTipoArchivo], [Nombre], [Extensiones]) VALUES (12, N'Archivo Excel menor a 2007', N'.xls')
SET IDENTITY_INSERT [dbo].[tvcTipoArchivo] OFF
GO
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (1, 2)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (1, 4)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (1, 5)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (1, 6)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (2, 4)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (2, 5)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (2, 6)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (2, 8)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (3, 4)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (3, 5)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (3, 6)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (3, 8)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (4, 4)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (4, 5)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (4, 6)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (4, 8)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (5, 2)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (5, 4)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (5, 5)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (5, 6)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (6, 2)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (6, 4)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (6, 5)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (6, 6)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (7, 2)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (7, 4)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (7, 5)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (7, 6)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (8, 2)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (8, 4)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (8, 5)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (8, 6)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (9, 2)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (9, 4)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (9, 5)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (9, 6)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (10, 2)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (10, 4)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (10, 5)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (10, 6)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (11, 2)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (11, 4)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (11, 5)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (11, 6)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (12, 2)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (12, 4)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (12, 5)
INSERT [dbo].[tvrTipoArchivoRecurso] ([IdTipoArchivo], [IdRecurso]) VALUES (12, 6)
GO