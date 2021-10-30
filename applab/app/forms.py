from django import forms
from app.models import *

class AdministradorForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for field in self.fields:
            self.fields[field].widget.attrs['class']='form-control'
        
    class Meta:
        model = Administrador
        fields = '__all__'
        verbose_name = "Formulario de administrador"