USE [tp_AulaVirtualt]
GO
/****** Object:  Table [dbo].[tvcCompetencias]    Script Date: 25/08/2021 09:56:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tvcCompetencias](
	[IdCompetencia] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](100) NOT NULL,
 CONSTRAINT [PK_tvcCompetencias] PRIMARY KEY CLUSTERED 
(
	[IdCompetencia] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tvcEstatus]    Script Date: 25/08/2021 09:56:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tvcEstatus](
	[IdEstatus] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](25) NOT NULL,
	[TablaUso] [varchar](50) NOT NULL,
 CONSTRAINT [PK_tvcEstatus] PRIMARY KEY CLUSTERED 
(
	[IdEstatus] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tvcRecursos]    Script Date: 25/08/2021 09:56:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tvcRecursos](
	[IdRecurso] [int] IDENTITY(1,1) NOT NULL,
	[IdEstatus] [int] NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
	[Descripcion] [nvarchar](max) NULL,
	[Icono] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_tvcRecursos] PRIMARY KEY CLUSTERED 
(
	[IdRecurso] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tvcSecciones]    Script Date: 25/08/2021 09:56:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tvcSecciones](
	[IdSeccion] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [nvarchar](max) NOT NULL,
	[Descripcion] [nvarchar](max) NULL,
	[Obligatorio] [bit] NOT NULL,
	[Icono] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_tvcSecciones] PRIMARY KEY CLUSTERED 
(
	[IdSeccion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tvcTipo_Pregunta]    Script Date: 25/08/2021 09:56:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tvcTipo_Pregunta](
	[IdTipoPregunta] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
 CONSTRAINT [PK_tvcTipo_Pregunta] PRIMARY KEY CLUSTERED 
(
	[IdTipoPregunta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tvcTipoArchivo]    Script Date: 25/08/2021 09:56:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tvcTipoArchivo](
	[IdTipoArchivo] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
	[Extensiones] [varchar](200) NOT NULL,
 CONSTRAINT [PK_tvcTipoArchivo] PRIMARY KEY CLUSTERED 
(
	[IdTipoArchivo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tvcTipoExamen]    Script Date: 25/08/2021 09:56:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tvcTipoExamen](
	[IdTipoExamen] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
 CONSTRAINT [PK_tvcTipoExamen] PRIMARY KEY CLUSTERED 
(
	[IdTipoExamen] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tvcTipoNotificacion]    Script Date: 25/08/2021 09:56:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tvcTipoNotificacion](
	[IdTipoNotificacion] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [nvarchar](max) NULL,
 CONSTRAINT [PK_tvcTipoNotificacion] PRIMARY KEY CLUSTERED 
(
	[IdTipoNotificacion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tveAlumnoCarpeta]    Script Date: 25/08/2021 09:56:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tveAlumnoCarpeta](
	[IdAlumnoCarpeta] [int] IDENTITY(1,1) NOT NULL,
	[IdAlumno] [int] NOT NULL,
	[NombreCarpeta] [nvarchar](max) NOT NULL,
	[TamanoCarpeta] [decimal](8, 2) NOT NULL,
	[TamanoTotal] [decimal](8, 2) NOT NULL,
 CONSTRAINT [PK_tveAlumnoCarpeta] PRIMARY KEY CLUSTERED 
(
	[IdAlumnoCarpeta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tveArchivos]    Script Date: 25/08/2021 09:56:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tveArchivos](
	[IdArchivo] [int] IDENTITY(1,1) NOT NULL,
	[IdTareaAlumno] [int] NULL,
	[IdRecursoSeccionTarea] [int] NULL,
	[IdRecursoSeccionForo] [int] NULL,
	[IdRecursoSeccion] [int] NULL,
	[IdPregunta] [int] NULL,
	[IdRespuestaPregunta] [int] NULL,
	[FechaCarga] [date] NOT NULL,
	[HoraCarga] [datetime2](7) NOT NULL,
	[RutaArchivo] [varchar](1000) NOT NULL,
	[IdAlumnoCarpeta] [int] NULL,
	[IdDocenteCarpeta] [int] NULL,
	[IdQuizRespuestaAlumno] [int] NULL,
	[IdRetroalimentacionTarea] [int] NULL,
	[IdEstatus] [int] NOT NULL,
	[IsDocente] [bit] NOT NULL,
	[TamanoArchivo] [decimal](8, 2) NOT NULL,
 CONSTRAINT [PK_tveArchivos] PRIMARY KEY CLUSTERED 
(
	[IdArchivo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tveDocenteCarpeta]    Script Date: 25/08/2021 09:56:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tveDocenteCarpeta](
	[IdDocenteCarpeta] [int] IDENTITY(1,1) NOT NULL,
	[IdDocente] [int] NOT NULL,
	[NombreCarpeta] [nvarchar](max) NOT NULL,
	[TamanoCarpeta] [decimal](8, 2) NOT NULL,
	[TamanoTotal] [decimal](8, 2) NOT NULL,
 CONSTRAINT [PK_tveDocenteCarpeta] PRIMARY KEY CLUSTERED 
(
	[IdDocenteCarpeta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tveNotificacion]    Script Date: 25/08/2021 09:56:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tveNotificacion](
	[IdNotificacion] [bigint] IDENTITY(1,1) NOT NULL,
	[Tema] [nvarchar](max) NOT NULL,
	[IdTipoNotificacion] [int] NOT NULL,
	[IdParticipanteRemitente] [int] NOT NULL,
	[IsAlumnoRemitente] [bit] NOT NULL,
	[IdParticipanteEmisor] [int] NOT NULL,
	[IsAlumnoEmisor] [bit] NOT NULL,
	[FechaNotificacion] [datetime2](7) NOT NULL,
	[IdEstatus] [int] NOT NULL,
 CONSTRAINT [PK_tveNotificacion] PRIMARY KEY CLUSTERED 
(
	[IdNotificacion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tvePreguntas]    Script Date: 25/08/2021 09:56:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tvePreguntas](
	[IdPregunta] [int] IDENTITY(1,1) NOT NULL,
	[IdTipoPregunta] [int] NOT NULL,
	[IdRecursoSeccionQuiz] [int] NOT NULL,
	[IdEstatus] [int] NOT NULL,
	[Pregunta] [nvarchar](max) NOT NULL,
	[URL] [nvarchar](max) NULL,
	[Procentaje] [decimal](18, 0) NOT NULL,
	[Justificacion] [nvarchar](max) NULL,
	[Duracion] [int] NOT NULL,
	[Orden] [int] NOT NULL,
	[IsBanco] [bit] NOT NULL,
 CONSTRAINT [PK_tvePreguntas] PRIMARY KEY CLUSTERED 
(
	[IdPregunta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tveQuizAlumno]    Script Date: 25/08/2021 09:56:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tveQuizAlumno](
	[IdQuizAlumno] [int] IDENTITY(1,1) NOT NULL,
	[IdRecursoSeccionQuiz] [int] NULL,
	[IdEstatus] [int] NOT NULL,
	[IdUsuario] [int] NOT NULL,
	[IsAlumno] [bit] NOT NULL,
	[FechaElaboracion] [date] NOT NULL,
	[HoraInicio] [datetime2](7) NOT NULL,
	[HoraFin] [datetime2](7) NOT NULL,
	[NotaOriginal] [nvarchar](max) NOT NULL,
	[UltimaNota] [nvarchar](max) NULL,
	[Desempeno] [varchar](25) NOT NULL,
	[SolicitoReinicio] [bit] NOT NULL,
	[RespondioExamen] [bit] NOT NULL,
 CONSTRAINT [PK_tveQuizAlumno] PRIMARY KEY CLUSTERED 
(
	[IdQuizAlumno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tveQuizReinicio]    Script Date: 25/08/2021 09:56:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tveQuizReinicio](
	[IdQuizReinicio] [int] IDENTITY(1,1) NOT NULL,
	[IdQuizAlumno] [int] NOT NULL,
	[FechaInicio] [date] NOT NULL,
	[HoraInicio] [datetime2](7) NOT NULL,
	[FechaCierre] [date] NOT NULL,
	[HoraCierre] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_tveQuizReinicio] PRIMARY KEY CLUSTERED 
(
	[IdQuizReinicio] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tveRecursoSeccionForo]    Script Date: 25/08/2021 09:56:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tveRecursoSeccionForo](
	[IdRecursoSeccionForo] [int] IDENTITY(1,1) NOT NULL,
	[IdRecursoSeccion] [int] NOT NULL,
	[FechaInicio] [date] NOT NULL,
	[HoraInicio] [datetime2](7) NOT NULL,
	[FechaCierre] [date] NOT NULL,
	[HoraCierre] [datetime2](7) NOT NULL,
	[TomaNotas] [bit] NOT NULL,
	[MuestraRespuesta] [bit] NOT NULL,
	[EntregasFueraTiempo] [bit] NOT NULL,
 CONSTRAINT [PK_tveRecursoSeccionForo] PRIMARY KEY CLUSTERED 
(
	[IdRecursoSeccionForo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tveRecursoSeccionQuiz]    Script Date: 25/08/2021 09:56:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tveRecursoSeccionQuiz](
	[IdRecursoSeccionQuiz] [int] IDENTITY(1,1) NOT NULL,
	[IdRecursoSeccion] [int] NOT NULL,
	[IdTipoExamen] [int] NOT NULL,
	[IdTipoQuiz] [int] NOT NULL,
	[FechaInicio] [date] NOT NULL,
	[HoraInicio] [datetime2](7) NOT NULL,
	[FechaCierre] [date] NOT NULL,
	[HoraCierre] [datetime2](7) NOT NULL,
	[Duracion] [int] NOT NULL,
	[Contrasena] [varchar](20) NULL,
	[OrdenPreguntas] [varchar](20) NULL,
	[IsRevisionEstudiante] [bit] NOT NULL,
	[IsTiempoPorPregunta] [bit] NOT NULL,
 CONSTRAINT [PK_tveRecursoSeccionQuiz] PRIMARY KEY CLUSTERED 
(
	[IdRecursoSeccionQuiz] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tveRecursoSeccionTarea]    Script Date: 25/08/2021 09:56:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tveRecursoSeccionTarea](
	[IdRecursoSeccionTarea] [int] IDENTITY(1,1) NOT NULL,
	[IdRecursoSeccion] [int] NOT NULL,
	[FechaInicio] [date] NOT NULL,
	[HoraInicio] [datetime2](7) NOT NULL,
	[FechaCierre] [date] NOT NULL,
	[HoraCierre] [datetime2](7) NOT NULL,
	[EntregasFueraTiempo] [bit] NOT NULL,
	[TomarNota] [bit] NOT NULL,
 CONSTRAINT [PK_tveRecursoSeccionTarea] PRIMARY KEY CLUSTERED 
(
	[IdRecursoSeccionTarea] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tveRecursoSeccionVideoC]    Script Date: 25/08/2021 09:56:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tveRecursoSeccionVideoC](
	[IdRecursoSeccionVideoC] [int] IDENTITY(1,1) NOT NULL,
	[IdRecursoSeccion] [int] NOT NULL,
	[FechaSesion] [date] NOT NULL,
	[HoraInicio] [datetime2](7) NOT NULL,
	[HoraFin] [datetime2](7) NOT NULL,
	[CorreoZoom] [varchar](100) NULL,
 CONSTRAINT [PK_tveRecursoSeccionVideoC] PRIMARY KEY CLUSTERED 
(
	[IdRecursoSeccionVideoC] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tveReinicioTarea]    Script Date: 25/08/2021 09:56:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tveReinicioTarea](
	[IdReinicioTarea] [int] IDENTITY(1,1) NOT NULL,
	[IdTareaAlumno] [int] NOT NULL,
	[FechaInicio] [date] NOT NULL,
	[HoraInicio] [datetime2](7) NOT NULL,
	[FechaCierre] [date] NOT NULL,
	[HoraCierre] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_tveReinicioTarea] PRIMARY KEY CLUSTERED 
(
	[IdReinicioTarea] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tveRespuestasPreguntas]    Script Date: 25/08/2021 09:56:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tveRespuestasPreguntas](
	[IdRespuestaPregunta] [int] IDENTITY(1,1) NOT NULL,
	[Respuesta] [nvarchar](max) NULL,
	[IdPregunta] [int] NOT NULL,
	[IdEstatus] [int] NOT NULL,
	[IsRespuesta] [bit] NOT NULL,
	[IsRelacional] [bit] NOT NULL,
	[IdRespuestaRelacional] [int] NULL,
 CONSTRAINT [PK_tveRespuestasPreguntas] PRIMARY KEY CLUSTERED 
(
	[IdRespuestaPregunta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tveRetroalimentacionTarea]    Script Date: 25/08/2021 09:56:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tveRetroalimentacionTarea](
	[IdRetroalimentacionTarea] [int] IDENTITY(1,1) NOT NULL,
	[IdTareaAlumno] [int] NOT NULL,
	[FechaCreacion] [datetime2](7) NOT NULL,
	[IdAlumno] [int] NOT NULL,
	[Mensaje] [varchar](1000) NOT NULL,
	[Visto] [bit] NOT NULL,
 CONSTRAINT [PK_tveRetroalimentacionTarea] PRIMARY KEY CLUSTERED 
(
	[IdRetroalimentacionTarea] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tveSemana]    Script Date: 25/08/2021 09:56:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tveSemana](
	[IdSemana] [int] IDENTITY(1,1) NOT NULL,
	[IdPeriodo] [int] NOT NULL,
	[IdCampus] [int] NOT NULL,
	[IdCicloEscolar] [int] NOT NULL,
	[IdNivelAcademico] [int] NOT NULL,
	[IdGrupo] [smallint] NOT NULL,
	[IdGrado] [int] NOT NULL,
	[IdArea] [int] NOT NULL,
	[IdAsignatura] [int] NOT NULL,
	[IdDocente] [int] NOT NULL,
	[Tema] [varchar](150) NOT NULL,
	[IsFijo] [bit] NOT NULL,
	[Posicion] [int] NOT NULL,
	[IdEstatus] [int] NOT NULL,
 CONSTRAINT [PK_tveSemana] PRIMARY KEY CLUSTERED 
(
	[IdSemana] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tveTareaAlumno]    Script Date: 25/08/2021 09:56:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tveTareaAlumno](
	[IdTareaAlumno] [int] IDENTITY(1,1) NOT NULL,
	[IdRecursoSeccionTarea] [int] NULL,
	[IdEstatus] [int] NOT NULL,
	[IdAlumno] [int] NOT NULL,
	[Respuesta] [nvarchar](max) NOT NULL,
	[RetroAlimentacion] [nvarchar](max) NULL,
	[Nota] [nvarchar](max) NOT NULL,
	[FechaEntrega] [date] NOT NULL,
	[HoraEntrega] [datetime2](7) NOT NULL,
	[UltimaActualizacion] [date] NULL,
	[SolicitoReinicio] [bit] NOT NULL,
 CONSTRAINT [PK_tveTareaAlumno] PRIMARY KEY CLUSTERED 
(
	[IdTareaAlumno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tvrCalificacionForoAlumno]    Script Date: 25/08/2021 09:56:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tvrCalificacionForoAlumno](
	[IdCalificacionForo] [int] IDENTITY(1,1) NOT NULL,
	[IdRecursoSeccionForo] [int] NOT NULL,
	[IdAlumno] [int] NOT NULL,
	[Nota] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_tvrCalificacionForoAlumno] PRIMARY KEY CLUSTERED 
(
	[IdCalificacionForo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tvrComentarioForoRespuesta]    Script Date: 25/08/2021 09:56:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tvrComentarioForoRespuesta](
	[IdComentarioPrincipal] [int] NOT NULL,
	[IdComentarioRespuesta] [int] NOT NULL,
	[TvrForoAlumnoPrincipalIdForoAlumno] [int] NULL,
	[TvrForoAlumnoRespuestaIdForoAlumno] [int] NULL,
 CONSTRAINT [PK_tvrComentarioForoRespuesta] PRIMARY KEY CLUSTERED 
(
	[IdComentarioPrincipal] ASC,
	[IdComentarioRespuesta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tvrForo_Alumno]    Script Date: 25/08/2021 09:56:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tvrForo_Alumno](
	[IdForoAlumno] [int] IDENTITY(1,1) NOT NULL,
	[IdRecursoSeccionForo] [int] NOT NULL,
	[IdParticipante] [int] NOT NULL,
	[Publicacion] [varchar](1000) NOT NULL,
	[FechaPublicacion] [datetime2](7) NOT NULL,
	[IsAlumno] [bit] NOT NULL,
	[IsRespuesta] [bit] NOT NULL,
 CONSTRAINT [PK_tvrForo_Alumno] PRIMARY KEY CLUSTERED 
(
	[IdForoAlumno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tvrNotificacionRecursoSeccion]    Script Date: 25/08/2021 09:56:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tvrNotificacionRecursoSeccion](
	[IdNotificacion] [bigint] NOT NULL,
	[IdRecursoSeccion] [int] NOT NULL,
 CONSTRAINT [PK_tvrNotificacionRecursoSeccion] PRIMARY KEY CLUSTERED 
(
	[IdNotificacion] ASC,
	[IdRecursoSeccion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tvrNotificacionRetroalimentacion]    Script Date: 25/08/2021 09:56:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tvrNotificacionRetroalimentacion](
	[IdNotificacion] [bigint] NOT NULL,
	[IdRetroalimentacionTarea] [int] NOT NULL,
 CONSTRAINT [PK_tvrNotificacionRetroalimentacion] PRIMARY KEY CLUSTERED 
(
	[IdNotificacion] ASC,
	[IdRetroalimentacionTarea] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tvrPreguntaCompetencia]    Script Date: 25/08/2021 09:56:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tvrPreguntaCompetencia](
	[IdPreguntaCompetencia] [int] IDENTITY(1,1) NOT NULL,
	[IdPregunta] [int] NOT NULL,
	[IdQuizCompetencia] [int] NOT NULL,
	[Porcentaje] [int] NULL,
 CONSTRAINT [PK_tvrPreguntaCompetencia] PRIMARY KEY CLUSTERED 
(
	[IdPreguntaCompetencia] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tvrQuizCompetencia]    Script Date: 25/08/2021 09:56:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tvrQuizCompetencia](
	[IdQuizCompetencia] [int] IDENTITY(1,1) NOT NULL,
	[IdRecursoSeccionQuiz] [int] NOT NULL,
	[IdCompetencia] [int] NOT NULL,
	[Porcentaje] [int] NOT NULL,
	[IdEstatus] [int] NOT NULL,
 CONSTRAINT [PK_tvrQuizCompetencia] PRIMARY KEY CLUSTERED 
(
	[IdQuizCompetencia] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tvrQuizRespuestasAlumno]    Script Date: 25/08/2021 09:56:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tvrQuizRespuestasAlumno](
	[IdQuizRespuestaAlumno] [int] IDENTITY(1,1) NOT NULL,
	[IdPregunta] [int] NOT NULL,
	[IdQuizAlumno] [int] NOT NULL,
	[IdEstatus] [int] NOT NULL,
	[IdRespuestaPregunta] [int] NULL,
	[IdRespuestaRelacional] [int] NULL,
	[Respuesta] [nvarchar](max) NULL,
	[PorcentajeRespuesta] [decimal](18, 0) NOT NULL,
 CONSTRAINT [PK_tvrQuizRespuestasAlumno] PRIMARY KEY CLUSTERED 
(
	[IdQuizRespuestaAlumno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tvrRecurso_Seccion_Alumno]    Script Date: 25/08/2021 09:56:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tvrRecurso_Seccion_Alumno](
	[IdRecursoSeccionAlumno] [int] IDENTITY(1,1) NOT NULL,
	[IdAlumno] [int] NOT NULL,
	[IdRecursoSeccion] [int] NOT NULL,
	[IdEstatus] [int] NOT NULL,
 CONSTRAINT [PK_tvrRecurso_Seccion_Alumno] PRIMARY KEY CLUSTERED 
(
	[IdRecursoSeccionAlumno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tvrRecursoSeccion]    Script Date: 25/08/2021 09:56:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tvrRecursoSeccion](
	[IdRecursoSeccion] [int] IDENTITY(1,1) NOT NULL,
	[IdRecurso] [int] NOT NULL,
	[IdSemanSeccion] [int] NOT NULL,
	[IdEstatus] [int] NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
	[Descripcion] [nvarchar](max) NOT NULL,
	[FechaPublicacion] [date] NOT NULL,
	[HoraPublicacion] [datetime2](7) NOT NULL,
	[Url] [varchar](1000) NULL,
	[IsPersonalizado] [bit] NOT NULL,
	[IsVisible] [bit] NOT NULL,
	[Posicion] [int] NOT NULL,
 CONSTRAINT [PK_tvrRecursoSeccion] PRIMARY KEY CLUSTERED 
(
	[IdRecursoSeccion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tvrRespuestaRelacional]    Script Date: 25/08/2021 09:56:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tvrRespuestaRelacional](
	[IdRespuestaRelacional] [int] IDENTITY(1,1) NOT NULL,
	[Respuesta] [nvarchar](max) NULL,
 CONSTRAINT [PK_tvrRespuestaRelacional] PRIMARY KEY CLUSTERED 
(
	[IdRespuestaRelacional] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tvrSemanaSeccion]    Script Date: 25/08/2021 09:56:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tvrSemanaSeccion](
	[IdSemanaSeccion] [int] IDENTITY(1,1) NOT NULL,
	[IdSeccion] [int] NOT NULL,
	[IdSemana] [int] NOT NULL,
	[NombreTitulo] [varchar](150) NOT NULL,
	[IdEstatus] [int] NOT NULL,
	[Posicion] [int] NOT NULL,
 CONSTRAINT [PK_tvrSemanaSeccion] PRIMARY KEY CLUSTERED 
(
	[IdSemanaSeccion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tvrTipoArchivoRecurso]    Script Date: 25/08/2021 09:56:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tvrTipoArchivoRecurso](
	[IdTipoArchivo] [int] NOT NULL,
	[IdRecurso] [int] NOT NULL,
 CONSTRAINT [PK_tvrTipoArchivoRecurso] PRIMARY KEY CLUSTERED 
(
	[IdRecurso] ASC,
	[IdTipoArchivo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[tvcRecursos]  WITH CHECK ADD  CONSTRAINT [FK_tvcRecursos_tvcEstatus_IdEstatus] FOREIGN KEY([IdEstatus])
REFERENCES [dbo].[tvcEstatus] ([IdEstatus])
GO
ALTER TABLE [dbo].[tvcRecursos] CHECK CONSTRAINT [FK_tvcRecursos_tvcEstatus_IdEstatus]
GO
ALTER TABLE [dbo].[tveArchivos]  WITH CHECK ADD  CONSTRAINT [FK_tveArchivos_tvcEstatus_IdEstatus] FOREIGN KEY([IdEstatus])
REFERENCES [dbo].[tvcEstatus] ([IdEstatus])
GO
ALTER TABLE [dbo].[tveArchivos] CHECK CONSTRAINT [FK_tveArchivos_tvcEstatus_IdEstatus]
GO
ALTER TABLE [dbo].[tveArchivos]  WITH CHECK ADD  CONSTRAINT [FK_tveArchivos_tveAlumnoCarpeta_IdAlumnoCarpeta] FOREIGN KEY([IdAlumnoCarpeta])
REFERENCES [dbo].[tveAlumnoCarpeta] ([IdAlumnoCarpeta])
GO
ALTER TABLE [dbo].[tveArchivos] CHECK CONSTRAINT [FK_tveArchivos_tveAlumnoCarpeta_IdAlumnoCarpeta]
GO
ALTER TABLE [dbo].[tveArchivos]  WITH CHECK ADD  CONSTRAINT [FK_tveArchivos_tveDocenteCarpeta_IdDocenteCarpeta] FOREIGN KEY([IdDocenteCarpeta])
REFERENCES [dbo].[tveDocenteCarpeta] ([IdDocenteCarpeta])
GO
ALTER TABLE [dbo].[tveArchivos] CHECK CONSTRAINT [FK_tveArchivos_tveDocenteCarpeta_IdDocenteCarpeta]
GO
ALTER TABLE [dbo].[tveArchivos]  WITH CHECK ADD  CONSTRAINT [FK_tveArchivos_tvePreguntas_IdPregunta] FOREIGN KEY([IdPregunta])
REFERENCES [dbo].[tvePreguntas] ([IdPregunta])
GO
ALTER TABLE [dbo].[tveArchivos] CHECK CONSTRAINT [FK_tveArchivos_tvePreguntas_IdPregunta]
GO
ALTER TABLE [dbo].[tveArchivos]  WITH CHECK ADD  CONSTRAINT [FK_tveArchivos_tveRecursoSeccionForo_IdRecursoSeccionForo] FOREIGN KEY([IdRecursoSeccionForo])
REFERENCES [dbo].[tveRecursoSeccionForo] ([IdRecursoSeccionForo])
GO
ALTER TABLE [dbo].[tveArchivos] CHECK CONSTRAINT [FK_tveArchivos_tveRecursoSeccionForo_IdRecursoSeccionForo]
GO
ALTER TABLE [dbo].[tveArchivos]  WITH CHECK ADD  CONSTRAINT [FK_tveArchivos_tveRecursoSeccionTarea_IdRecursoSeccionTarea] FOREIGN KEY([IdRecursoSeccionTarea])
REFERENCES [dbo].[tveRecursoSeccionTarea] ([IdRecursoSeccionTarea])
GO
ALTER TABLE [dbo].[tveArchivos] CHECK CONSTRAINT [FK_tveArchivos_tveRecursoSeccionTarea_IdRecursoSeccionTarea]
GO
ALTER TABLE [dbo].[tveArchivos]  WITH CHECK ADD  CONSTRAINT [FK_tveArchivos_tveRespuestasPreguntas_IdRespuestaPregunta] FOREIGN KEY([IdRespuestaPregunta])
REFERENCES [dbo].[tveRespuestasPreguntas] ([IdRespuestaPregunta])
GO
ALTER TABLE [dbo].[tveArchivos] CHECK CONSTRAINT [FK_tveArchivos_tveRespuestasPreguntas_IdRespuestaPregunta]
GO
ALTER TABLE [dbo].[tveArchivos]  WITH CHECK ADD  CONSTRAINT [FK_tveArchivos_tveRetroalimentacionTarea_IdRetroalimentacionTarea] FOREIGN KEY([IdRetroalimentacionTarea])
REFERENCES [dbo].[tveRetroalimentacionTarea] ([IdRetroalimentacionTarea])
GO
ALTER TABLE [dbo].[tveArchivos] CHECK CONSTRAINT [FK_tveArchivos_tveRetroalimentacionTarea_IdRetroalimentacionTarea]
GO
ALTER TABLE [dbo].[tveArchivos]  WITH CHECK ADD  CONSTRAINT [FK_tveArchivos_tveTareaAlumno_IdTareaAlumno] FOREIGN KEY([IdTareaAlumno])
REFERENCES [dbo].[tveTareaAlumno] ([IdTareaAlumno])
GO
ALTER TABLE [dbo].[tveArchivos] CHECK CONSTRAINT [FK_tveArchivos_tveTareaAlumno_IdTareaAlumno]
GO
ALTER TABLE [dbo].[tveArchivos]  WITH CHECK ADD  CONSTRAINT [FK_tveArchivos_tvrQuizRespuestasAlumno_IdQuizRespuestaAlumno] FOREIGN KEY([IdQuizRespuestaAlumno])
REFERENCES [dbo].[tvrQuizRespuestasAlumno] ([IdQuizRespuestaAlumno])
GO
ALTER TABLE [dbo].[tveArchivos] CHECK CONSTRAINT [FK_tveArchivos_tvrQuizRespuestasAlumno_IdQuizRespuestaAlumno]
GO
ALTER TABLE [dbo].[tveArchivos]  WITH CHECK ADD  CONSTRAINT [FK_tveArchivos_tvrRecursoSeccion_IdRecursoSeccion] FOREIGN KEY([IdRecursoSeccion])
REFERENCES [dbo].[tvrRecursoSeccion] ([IdRecursoSeccion])
GO
ALTER TABLE [dbo].[tveArchivos] CHECK CONSTRAINT [FK_tveArchivos_tvrRecursoSeccion_IdRecursoSeccion]
GO
ALTER TABLE [dbo].[tveNotificacion]  WITH CHECK ADD  CONSTRAINT [FK_tveNotificacion_tvcEstatus_IdEstatus] FOREIGN KEY([IdEstatus])
REFERENCES [dbo].[tvcEstatus] ([IdEstatus])
GO
ALTER TABLE [dbo].[tveNotificacion] CHECK CONSTRAINT [FK_tveNotificacion_tvcEstatus_IdEstatus]
GO
ALTER TABLE [dbo].[tveNotificacion]  WITH CHECK ADD  CONSTRAINT [FK_tveNotificacion_tvcTipoNotificacion_IdTipoNotificacion] FOREIGN KEY([IdTipoNotificacion])
REFERENCES [dbo].[tvcTipoNotificacion] ([IdTipoNotificacion])
GO
ALTER TABLE [dbo].[tveNotificacion] CHECK CONSTRAINT [FK_tveNotificacion_tvcTipoNotificacion_IdTipoNotificacion]
GO
ALTER TABLE [dbo].[tvePreguntas]  WITH CHECK ADD  CONSTRAINT [FK_tvePreguntas_tvcEstatus_IdEstatus] FOREIGN KEY([IdEstatus])
REFERENCES [dbo].[tvcEstatus] ([IdEstatus])
GO
ALTER TABLE [dbo].[tvePreguntas] CHECK CONSTRAINT [FK_tvePreguntas_tvcEstatus_IdEstatus]
GO
ALTER TABLE [dbo].[tvePreguntas]  WITH CHECK ADD  CONSTRAINT [FK_tvePreguntas_tvcTipo_Pregunta_IdTipoPregunta] FOREIGN KEY([IdTipoPregunta])
REFERENCES [dbo].[tvcTipo_Pregunta] ([IdTipoPregunta])
GO
ALTER TABLE [dbo].[tvePreguntas] CHECK CONSTRAINT [FK_tvePreguntas_tvcTipo_Pregunta_IdTipoPregunta]
GO
ALTER TABLE [dbo].[tvePreguntas]  WITH CHECK ADD  CONSTRAINT [FK_tvePreguntas_tveRecursoSeccionQuiz_IdRecursoSeccionQuiz] FOREIGN KEY([IdRecursoSeccionQuiz])
REFERENCES [dbo].[tveRecursoSeccionQuiz] ([IdRecursoSeccionQuiz])
GO
ALTER TABLE [dbo].[tvePreguntas] CHECK CONSTRAINT [FK_tvePreguntas_tveRecursoSeccionQuiz_IdRecursoSeccionQuiz]
GO
ALTER TABLE [dbo].[tveQuizAlumno]  WITH CHECK ADD  CONSTRAINT [FK_tveQuizAlumno_tvcEstatus_IdEstatus] FOREIGN KEY([IdEstatus])
REFERENCES [dbo].[tvcEstatus] ([IdEstatus])
GO
ALTER TABLE [dbo].[tveQuizAlumno] CHECK CONSTRAINT [FK_tveQuizAlumno_tvcEstatus_IdEstatus]
GO
ALTER TABLE [dbo].[tveQuizAlumno]  WITH CHECK ADD  CONSTRAINT [FK_tveQuizAlumno_tveRecursoSeccionQuiz_IdRecursoSeccionQuiz] FOREIGN KEY([IdRecursoSeccionQuiz])
REFERENCES [dbo].[tveRecursoSeccionQuiz] ([IdRecursoSeccionQuiz])
GO
ALTER TABLE [dbo].[tveQuizAlumno] CHECK CONSTRAINT [FK_tveQuizAlumno_tveRecursoSeccionQuiz_IdRecursoSeccionQuiz]
GO
ALTER TABLE [dbo].[tveQuizReinicio]  WITH CHECK ADD  CONSTRAINT [FK_tveQuizReinicio_tveQuizAlumno_IdQuizAlumno] FOREIGN KEY([IdQuizAlumno])
REFERENCES [dbo].[tveQuizAlumno] ([IdQuizAlumno])
GO
ALTER TABLE [dbo].[tveQuizReinicio] CHECK CONSTRAINT [FK_tveQuizReinicio_tveQuizAlumno_IdQuizAlumno]
GO
ALTER TABLE [dbo].[tveRecursoSeccionForo]  WITH CHECK ADD  CONSTRAINT [FK_tveRecursoSeccionForo_tvrRecursoSeccion_IdRecursoSeccion] FOREIGN KEY([IdRecursoSeccion])
REFERENCES [dbo].[tvrRecursoSeccion] ([IdRecursoSeccion])
GO
ALTER TABLE [dbo].[tveRecursoSeccionForo] CHECK CONSTRAINT [FK_tveRecursoSeccionForo_tvrRecursoSeccion_IdRecursoSeccion]
GO
ALTER TABLE [dbo].[tveRecursoSeccionQuiz]  WITH CHECK ADD  CONSTRAINT [FK_tveRecursoSeccionQuiz_tvcTipoExamen_IdTipoExamen] FOREIGN KEY([IdTipoExamen])
REFERENCES [dbo].[tvcTipoExamen] ([IdTipoExamen])
GO
ALTER TABLE [dbo].[tveRecursoSeccionQuiz] CHECK CONSTRAINT [FK_tveRecursoSeccionQuiz_tvcTipoExamen_IdTipoExamen]
GO
ALTER TABLE [dbo].[tveRecursoSeccionQuiz]  WITH CHECK ADD  CONSTRAINT [FK_tveRecursoSeccionQuiz_tvrRecursoSeccion_IdRecursoSeccion] FOREIGN KEY([IdRecursoSeccion])
REFERENCES [dbo].[tvrRecursoSeccion] ([IdRecursoSeccion])
GO
ALTER TABLE [dbo].[tveRecursoSeccionQuiz] CHECK CONSTRAINT [FK_tveRecursoSeccionQuiz_tvrRecursoSeccion_IdRecursoSeccion]
GO
ALTER TABLE [dbo].[tveRecursoSeccionTarea]  WITH CHECK ADD  CONSTRAINT [FK_tveRecursoSeccionTarea_tvrRecursoSeccion_IdRecursoSeccion] FOREIGN KEY([IdRecursoSeccion])
REFERENCES [dbo].[tvrRecursoSeccion] ([IdRecursoSeccion])
GO
ALTER TABLE [dbo].[tveRecursoSeccionTarea] CHECK CONSTRAINT [FK_tveRecursoSeccionTarea_tvrRecursoSeccion_IdRecursoSeccion]
GO
ALTER TABLE [dbo].[tveRecursoSeccionVideoC]  WITH CHECK ADD  CONSTRAINT [FK_tveRecursoSeccionVideoC_tvrRecursoSeccion_IdRecursoSeccion] FOREIGN KEY([IdRecursoSeccion])
REFERENCES [dbo].[tvrRecursoSeccion] ([IdRecursoSeccion])
GO
ALTER TABLE [dbo].[tveRecursoSeccionVideoC] CHECK CONSTRAINT [FK_tveRecursoSeccionVideoC_tvrRecursoSeccion_IdRecursoSeccion]
GO
ALTER TABLE [dbo].[tveReinicioTarea]  WITH CHECK ADD  CONSTRAINT [FK_tveReinicioTarea_tveTareaAlumno_IdTareaAlumno] FOREIGN KEY([IdTareaAlumno])
REFERENCES [dbo].[tveTareaAlumno] ([IdTareaAlumno])
GO
ALTER TABLE [dbo].[tveReinicioTarea] CHECK CONSTRAINT [FK_tveReinicioTarea_tveTareaAlumno_IdTareaAlumno]
GO
ALTER TABLE [dbo].[tveRespuestasPreguntas]  WITH CHECK ADD  CONSTRAINT [FK_tveRespuestasPreguntas_tvcEstatus_IdEstatus] FOREIGN KEY([IdEstatus])
REFERENCES [dbo].[tvcEstatus] ([IdEstatus])
GO
ALTER TABLE [dbo].[tveRespuestasPreguntas] CHECK CONSTRAINT [FK_tveRespuestasPreguntas_tvcEstatus_IdEstatus]
GO
ALTER TABLE [dbo].[tveRespuestasPreguntas]  WITH CHECK ADD  CONSTRAINT [FK_tveRespuestasPreguntas_tvePreguntas_IdPregunta] FOREIGN KEY([IdPregunta])
REFERENCES [dbo].[tvePreguntas] ([IdPregunta])
GO
ALTER TABLE [dbo].[tveRespuestasPreguntas] CHECK CONSTRAINT [FK_tveRespuestasPreguntas_tvePreguntas_IdPregunta]
GO
ALTER TABLE [dbo].[tveRespuestasPreguntas]  WITH CHECK ADD  CONSTRAINT [FK_tveRespuestasPreguntas_tvrRespuestaRelacional_IdRespuestaRelacional] FOREIGN KEY([IdRespuestaRelacional])
REFERENCES [dbo].[tvrRespuestaRelacional] ([IdRespuestaRelacional])
GO
ALTER TABLE [dbo].[tveRespuestasPreguntas] CHECK CONSTRAINT [FK_tveRespuestasPreguntas_tvrRespuestaRelacional_IdRespuestaRelacional]
GO
ALTER TABLE [dbo].[tveRetroalimentacionTarea]  WITH CHECK ADD  CONSTRAINT [FK_tveRetroalimentacionTarea_tveTareaAlumno_IdTareaAlumno] FOREIGN KEY([IdTareaAlumno])
REFERENCES [dbo].[tveTareaAlumno] ([IdTareaAlumno])
GO
ALTER TABLE [dbo].[tveRetroalimentacionTarea] CHECK CONSTRAINT [FK_tveRetroalimentacionTarea_tveTareaAlumno_IdTareaAlumno]
GO
ALTER TABLE [dbo].[tveSemana]  WITH CHECK ADD  CONSTRAINT [FK_tveSemana_tvcEstatus_IdEstatus] FOREIGN KEY([IdEstatus])
REFERENCES [dbo].[tvcEstatus] ([IdEstatus])
GO
ALTER TABLE [dbo].[tveSemana] CHECK CONSTRAINT [FK_tveSemana_tvcEstatus_IdEstatus]
GO
ALTER TABLE [dbo].[tveTareaAlumno]  WITH CHECK ADD  CONSTRAINT [FK_tveTareaAlumno_tvcEstatus_IdEstatus] FOREIGN KEY([IdEstatus])
REFERENCES [dbo].[tvcEstatus] ([IdEstatus])
GO
ALTER TABLE [dbo].[tveTareaAlumno] CHECK CONSTRAINT [FK_tveTareaAlumno_tvcEstatus_IdEstatus]
GO
ALTER TABLE [dbo].[tveTareaAlumno]  WITH CHECK ADD  CONSTRAINT [FK_tveTareaAlumno_tveRecursoSeccionTarea_IdRecursoSeccionTarea] FOREIGN KEY([IdRecursoSeccionTarea])
REFERENCES [dbo].[tveRecursoSeccionTarea] ([IdRecursoSeccionTarea])
GO
ALTER TABLE [dbo].[tveTareaAlumno] CHECK CONSTRAINT [FK_tveTareaAlumno_tveRecursoSeccionTarea_IdRecursoSeccionTarea]
GO
ALTER TABLE [dbo].[tvrCalificacionForoAlumno]  WITH CHECK ADD  CONSTRAINT [FK_tvrCalificacionForoAlumno_tveRecursoSeccionForo_IdRecursoSeccionForo] FOREIGN KEY([IdRecursoSeccionForo])
REFERENCES [dbo].[tveRecursoSeccionForo] ([IdRecursoSeccionForo])
GO
ALTER TABLE [dbo].[tvrCalificacionForoAlumno] CHECK CONSTRAINT [FK_tvrCalificacionForoAlumno_tveRecursoSeccionForo_IdRecursoSeccionForo]
GO
ALTER TABLE [dbo].[tvrComentarioForoRespuesta]  WITH CHECK ADD  CONSTRAINT [FK_tvrComentarioForoRespuesta_tvrForo_Alumno_TvrForoAlumnoPrincipalIdForoAlumno] FOREIGN KEY([TvrForoAlumnoPrincipalIdForoAlumno])
REFERENCES [dbo].[tvrForo_Alumno] ([IdForoAlumno])
GO
ALTER TABLE [dbo].[tvrComentarioForoRespuesta] CHECK CONSTRAINT [FK_tvrComentarioForoRespuesta_tvrForo_Alumno_TvrForoAlumnoPrincipalIdForoAlumno]
GO
ALTER TABLE [dbo].[tvrComentarioForoRespuesta]  WITH CHECK ADD  CONSTRAINT [FK_tvrComentarioForoRespuesta_tvrForo_Alumno_TvrForoAlumnoRespuestaIdForoAlumno] FOREIGN KEY([TvrForoAlumnoRespuestaIdForoAlumno])
REFERENCES [dbo].[tvrForo_Alumno] ([IdForoAlumno])
GO
ALTER TABLE [dbo].[tvrComentarioForoRespuesta] CHECK CONSTRAINT [FK_tvrComentarioForoRespuesta_tvrForo_Alumno_TvrForoAlumnoRespuestaIdForoAlumno]
GO
ALTER TABLE [dbo].[tvrForo_Alumno]  WITH CHECK ADD  CONSTRAINT [FK_tvrForo_Alumno_tveRecursoSeccionForo_IdRecursoSeccionForo] FOREIGN KEY([IdRecursoSeccionForo])
REFERENCES [dbo].[tveRecursoSeccionForo] ([IdRecursoSeccionForo])
GO
ALTER TABLE [dbo].[tvrForo_Alumno] CHECK CONSTRAINT [FK_tvrForo_Alumno_tveRecursoSeccionForo_IdRecursoSeccionForo]
GO
ALTER TABLE [dbo].[tvrNotificacionRecursoSeccion]  WITH CHECK ADD  CONSTRAINT [FK_tvrNotificacionRecursoSeccion_tveNotificacion_IdNotificacion] FOREIGN KEY([IdNotificacion])
REFERENCES [dbo].[tveNotificacion] ([IdNotificacion])
GO
ALTER TABLE [dbo].[tvrNotificacionRecursoSeccion] CHECK CONSTRAINT [FK_tvrNotificacionRecursoSeccion_tveNotificacion_IdNotificacion]
GO
ALTER TABLE [dbo].[tvrNotificacionRecursoSeccion]  WITH CHECK ADD  CONSTRAINT [FK_tvrNotificacionRecursoSeccion_tvrRecursoSeccion_IdRecursoSeccion] FOREIGN KEY([IdRecursoSeccion])
REFERENCES [dbo].[tvrRecursoSeccion] ([IdRecursoSeccion])
GO
ALTER TABLE [dbo].[tvrNotificacionRecursoSeccion] CHECK CONSTRAINT [FK_tvrNotificacionRecursoSeccion_tvrRecursoSeccion_IdRecursoSeccion]
GO
ALTER TABLE [dbo].[tvrNotificacionRetroalimentacion]  WITH CHECK ADD  CONSTRAINT [FK_tvrNotificacionRetroalimentacion_tveNotificacion_IdNotificacion] FOREIGN KEY([IdNotificacion])
REFERENCES [dbo].[tveNotificacion] ([IdNotificacion])
GO
ALTER TABLE [dbo].[tvrNotificacionRetroalimentacion] CHECK CONSTRAINT [FK_tvrNotificacionRetroalimentacion_tveNotificacion_IdNotificacion]
GO
ALTER TABLE [dbo].[tvrNotificacionRetroalimentacion]  WITH CHECK ADD  CONSTRAINT [FK_tvrNotificacionRetroalimentacion_tveRetroalimentacionTarea_IdRetroalimentacionTarea] FOREIGN KEY([IdRetroalimentacionTarea])
REFERENCES [dbo].[tveRetroalimentacionTarea] ([IdRetroalimentacionTarea])
GO
ALTER TABLE [dbo].[tvrNotificacionRetroalimentacion] CHECK CONSTRAINT [FK_tvrNotificacionRetroalimentacion_tveRetroalimentacionTarea_IdRetroalimentacionTarea]
GO
ALTER TABLE [dbo].[tvrPreguntaCompetencia]  WITH CHECK ADD  CONSTRAINT [FK_tvrPreguntaCompetencia_tvePreguntas_IdPregunta] FOREIGN KEY([IdPregunta])
REFERENCES [dbo].[tvePreguntas] ([IdPregunta])
GO
ALTER TABLE [dbo].[tvrPreguntaCompetencia] CHECK CONSTRAINT [FK_tvrPreguntaCompetencia_tvePreguntas_IdPregunta]
GO
ALTER TABLE [dbo].[tvrPreguntaCompetencia]  WITH CHECK ADD  CONSTRAINT [FK_tvrPreguntaCompetencia_tvrQuizCompetencia_IdQuizCompetencia] FOREIGN KEY([IdQuizCompetencia])
REFERENCES [dbo].[tvrQuizCompetencia] ([IdQuizCompetencia])
GO
ALTER TABLE [dbo].[tvrPreguntaCompetencia] CHECK CONSTRAINT [FK_tvrPreguntaCompetencia_tvrQuizCompetencia_IdQuizCompetencia]
GO
ALTER TABLE [dbo].[tvrQuizCompetencia]  WITH CHECK ADD  CONSTRAINT [FK_tvrQuizCompetencia_tvcCompetencias_IdCompetencia] FOREIGN KEY([IdCompetencia])
REFERENCES [dbo].[tvcCompetencias] ([IdCompetencia])
GO
ALTER TABLE [dbo].[tvrQuizCompetencia] CHECK CONSTRAINT [FK_tvrQuizCompetencia_tvcCompetencias_IdCompetencia]
GO
ALTER TABLE [dbo].[tvrQuizCompetencia]  WITH CHECK ADD  CONSTRAINT [FK_tvrQuizCompetencia_tvcEstatus_IdEstatus] FOREIGN KEY([IdEstatus])
REFERENCES [dbo].[tvcEstatus] ([IdEstatus])
GO
ALTER TABLE [dbo].[tvrQuizCompetencia] CHECK CONSTRAINT [FK_tvrQuizCompetencia_tvcEstatus_IdEstatus]
GO
ALTER TABLE [dbo].[tvrQuizCompetencia]  WITH CHECK ADD  CONSTRAINT [FK_tvrQuizCompetencia_tveRecursoSeccionQuiz_IdRecursoSeccionQuiz] FOREIGN KEY([IdRecursoSeccionQuiz])
REFERENCES [dbo].[tveRecursoSeccionQuiz] ([IdRecursoSeccionQuiz])
GO
ALTER TABLE [dbo].[tvrQuizCompetencia] CHECK CONSTRAINT [FK_tvrQuizCompetencia_tveRecursoSeccionQuiz_IdRecursoSeccionQuiz]
GO
ALTER TABLE [dbo].[tvrQuizRespuestasAlumno]  WITH CHECK ADD  CONSTRAINT [FK_tvrQuizRespuestasAlumno_tvcEstatus_IdEstatus] FOREIGN KEY([IdEstatus])
REFERENCES [dbo].[tvcEstatus] ([IdEstatus])
GO
ALTER TABLE [dbo].[tvrQuizRespuestasAlumno] CHECK CONSTRAINT [FK_tvrQuizRespuestasAlumno_tvcEstatus_IdEstatus]
GO
ALTER TABLE [dbo].[tvrQuizRespuestasAlumno]  WITH CHECK ADD  CONSTRAINT [FK_tvrQuizRespuestasAlumno_tvePreguntas_IdPregunta] FOREIGN KEY([IdPregunta])
REFERENCES [dbo].[tvePreguntas] ([IdPregunta])
GO
ALTER TABLE [dbo].[tvrQuizRespuestasAlumno] CHECK CONSTRAINT [FK_tvrQuizRespuestasAlumno_tvePreguntas_IdPregunta]
GO
ALTER TABLE [dbo].[tvrQuizRespuestasAlumno]  WITH CHECK ADD  CONSTRAINT [FK_tvrQuizRespuestasAlumno_tveQuizAlumno_IdQuizAlumno] FOREIGN KEY([IdQuizAlumno])
REFERENCES [dbo].[tveQuizAlumno] ([IdQuizAlumno])
GO
ALTER TABLE [dbo].[tvrQuizRespuestasAlumno] CHECK CONSTRAINT [FK_tvrQuizRespuestasAlumno_tveQuizAlumno_IdQuizAlumno]
GO
ALTER TABLE [dbo].[tvrQuizRespuestasAlumno]  WITH CHECK ADD  CONSTRAINT [FK_tvrQuizRespuestasAlumno_tveRespuestasPreguntas_IdRespuestaPregunta] FOREIGN KEY([IdRespuestaPregunta])
REFERENCES [dbo].[tveRespuestasPreguntas] ([IdRespuestaPregunta])
GO
ALTER TABLE [dbo].[tvrQuizRespuestasAlumno] CHECK CONSTRAINT [FK_tvrQuizRespuestasAlumno_tveRespuestasPreguntas_IdRespuestaPregunta]
GO
ALTER TABLE [dbo].[tvrQuizRespuestasAlumno]  WITH CHECK ADD  CONSTRAINT [FK_tvrQuizRespuestasAlumno_tvrRespuestaRelacional_IdRespuestaRelacional] FOREIGN KEY([IdRespuestaRelacional])
REFERENCES [dbo].[tvrRespuestaRelacional] ([IdRespuestaRelacional])
GO
ALTER TABLE [dbo].[tvrQuizRespuestasAlumno] CHECK CONSTRAINT [FK_tvrQuizRespuestasAlumno_tvrRespuestaRelacional_IdRespuestaRelacional]
GO
ALTER TABLE [dbo].[tvrRecurso_Seccion_Alumno]  WITH CHECK ADD  CONSTRAINT [FK_tvrRecurso_Seccion_Alumno_tvcEstatus_IdEstatus] FOREIGN KEY([IdEstatus])
REFERENCES [dbo].[tvcEstatus] ([IdEstatus])
GO
ALTER TABLE [dbo].[tvrRecurso_Seccion_Alumno] CHECK CONSTRAINT [FK_tvrRecurso_Seccion_Alumno_tvcEstatus_IdEstatus]
GO
ALTER TABLE [dbo].[tvrRecurso_Seccion_Alumno]  WITH CHECK ADD  CONSTRAINT [FK_tvrRecurso_Seccion_Alumno_tvrRecursoSeccion_IdRecursoSeccion] FOREIGN KEY([IdRecursoSeccion])
REFERENCES [dbo].[tvrRecursoSeccion] ([IdRecursoSeccion])
GO
ALTER TABLE [dbo].[tvrRecurso_Seccion_Alumno] CHECK CONSTRAINT [FK_tvrRecurso_Seccion_Alumno_tvrRecursoSeccion_IdRecursoSeccion]
GO
ALTER TABLE [dbo].[tvrRecursoSeccion]  WITH CHECK ADD  CONSTRAINT [FK_tvrRecursoSeccion_tvcEstatus_IdEstatus] FOREIGN KEY([IdEstatus])
REFERENCES [dbo].[tvcEstatus] ([IdEstatus])
GO
ALTER TABLE [dbo].[tvrRecursoSeccion] CHECK CONSTRAINT [FK_tvrRecursoSeccion_tvcEstatus_IdEstatus]
GO
ALTER TABLE [dbo].[tvrRecursoSeccion]  WITH CHECK ADD  CONSTRAINT [FK_tvrRecursoSeccion_tvcRecursos_IdRecurso] FOREIGN KEY([IdRecurso])
REFERENCES [dbo].[tvcRecursos] ([IdRecurso])
GO
ALTER TABLE [dbo].[tvrRecursoSeccion] CHECK CONSTRAINT [FK_tvrRecursoSeccion_tvcRecursos_IdRecurso]
GO
ALTER TABLE [dbo].[tvrRecursoSeccion]  WITH CHECK ADD  CONSTRAINT [FK_tvrRecursoSeccion_tvrSemanaSeccion_IdSemanSeccion] FOREIGN KEY([IdSemanSeccion])
REFERENCES [dbo].[tvrSemanaSeccion] ([IdSemanaSeccion])
GO
ALTER TABLE [dbo].[tvrRecursoSeccion] CHECK CONSTRAINT [FK_tvrRecursoSeccion_tvrSemanaSeccion_IdSemanSeccion]
GO
ALTER TABLE [dbo].[tvrSemanaSeccion]  WITH CHECK ADD  CONSTRAINT [FK_tvrSemanaSeccion_tvcEstatus_IdEstatus] FOREIGN KEY([IdEstatus])
REFERENCES [dbo].[tvcEstatus] ([IdEstatus])
GO
ALTER TABLE [dbo].[tvrSemanaSeccion] CHECK CONSTRAINT [FK_tvrSemanaSeccion_tvcEstatus_IdEstatus]
GO
ALTER TABLE [dbo].[tvrSemanaSeccion]  WITH CHECK ADD  CONSTRAINT [FK_tvrSemanaSeccion_tvcSecciones_IdSeccion] FOREIGN KEY([IdSeccion])
REFERENCES [dbo].[tvcSecciones] ([IdSeccion])
GO
ALTER TABLE [dbo].[tvrSemanaSeccion] CHECK CONSTRAINT [FK_tvrSemanaSeccion_tvcSecciones_IdSeccion]
GO
ALTER TABLE [dbo].[tvrSemanaSeccion]  WITH CHECK ADD  CONSTRAINT [FK_tvrSemanaSeccion_tveSemana_IdSemana] FOREIGN KEY([IdSemana])
REFERENCES [dbo].[tveSemana] ([IdSemana])
GO
ALTER TABLE [dbo].[tvrSemanaSeccion] CHECK CONSTRAINT [FK_tvrSemanaSeccion_tveSemana_IdSemana]
GO
ALTER TABLE [dbo].[tvrTipoArchivoRecurso]  WITH CHECK ADD  CONSTRAINT [FK_tvrTipoArchivoRecurso_tvcRecursos_IdRecurso] FOREIGN KEY([IdRecurso])
REFERENCES [dbo].[tvcRecursos] ([IdRecurso])
GO
ALTER TABLE [dbo].[tvrTipoArchivoRecurso] CHECK CONSTRAINT [FK_tvrTipoArchivoRecurso_tvcRecursos_IdRecurso]
GO
ALTER TABLE [dbo].[tvrTipoArchivoRecurso]  WITH CHECK ADD  CONSTRAINT [FK_tvrTipoArchivoRecurso_tvcTipoArchivo_IdTipoArchivo] FOREIGN KEY([IdTipoArchivo])
REFERENCES [dbo].[tvcTipoArchivo] ([IdTipoArchivo])
GO
ALTER TABLE [dbo].[tvrTipoArchivoRecurso] CHECK CONSTRAINT [FK_tvrTipoArchivoRecurso_tvcTipoArchivo_IdTipoArchivo]
GO
