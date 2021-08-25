USE [tp_AulaVirtualt]
GO
/****** Object:  Table [dbo].[tveQuizAlumno]    Script Date: 25/08/2021 12:39:09 p. m. ******/
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
