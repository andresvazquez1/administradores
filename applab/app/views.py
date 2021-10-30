from django.shortcuts import render
from django.template.loader import get_template
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from app.forms import *
from django.urls import reverse
from django.contrib.auth.decorators import login_required

# Create your views here.

@login_required
def inicio(request):
    template = get_template("inicio.html")
    c = {}
    c["titulo"] = "Inicio"
    return HttpResponse(template.render(c, request))

@login_required
def lista_administrador(request):
    template = get_template("lista.html")
    c = {}
    c["titulo"] = "Lista de Administradores"
    return HttpResponse(template.render(c, request))

@login_required
def nuevo_administrador(request):
    template = get_template("administrador.html")
    if request.method == 'POST':
        form = AdministradorForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect(reverse('lista_admin'))
    c = {}
    c["titulo"] = "Nuevo administrador"
    c["form"] = AdministradorForm()
    return HttpResponse(template.render(c, request))

@login_required
def editar_administrador(request, id):
    template = get_template("administrador.html")
    admin = Administrador.objects.get(id=id)
    if request.method == 'POST':
        form = AdministradorForm(request.POST, request.FILES, instance=admin)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect(reverse('lista_admin'))
    else:
        form = AdministradorForm(instance=admin)
    c = {}
    c["titulo"] = "Editar administrador"
    c["form"] = form
    return HttpResponse(template.render(c, request))

@login_required
def eliminar_administrador(request, id):
    Administrador.objects.get(id=id).delete()
    return HttpResponseRedirect(reverse('lista_admin'))

@login_required
def obtener_administradores(request):
    administradores = Administrador.objects.all()
    data = []
    for a in administradores:
        data.append({
            'id': a.id,
            'nombre': a.nombre,
            'apellido': a.apellido,
            'correo': a.correo,
            'area': a.area,
            'estatus': a.estatus,
        })
    return JsonResponse(data, safe=False)