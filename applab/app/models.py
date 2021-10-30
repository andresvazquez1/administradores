from django.db import models

# Create your models here.

class Administrador(models.Model):
    nombre = models.CharField(max_length=256, verbose_name="Nombre")
    apellido = models.CharField(max_length=256, verbose_name="Apellido")
    correo = models.CharField(max_length=256, verbose_name="Correo electrónico")
    area = models.CharField(max_length=256, verbose_name="Área")
    estatus = models.CharField(max_length=256, verbose_name="Estatus")
    foto = models.FileField(verbose_name="Foto de perfil")

    class Meta:
        verbose_name="Administrador"
        verbose_name_plural="Administradores"