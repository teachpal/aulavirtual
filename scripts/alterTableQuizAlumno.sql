use tp_AulaVirtualt
GO

ALTER TABLE tveQuizAlumno ALTER COLUMN NotaOriginal nvarchar(MAX) NOT NULL;
GO
ALTER TABLE tveQuizAlumno ALTER COLUMN UltimaNota nvarchar(MAX);
GO