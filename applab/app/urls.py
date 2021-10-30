from django.urls import include, path
from app import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('login',
        auth_views.LoginView.as_view(
            template_name='login.html'),
        name='login'),
    path('logout',
        auth_views.LogoutView.as_view(
            template_name='login.html',
            next_page='../login'),
        name='logout'),
    path('', views.inicio, name="inicio"),
    path('administrador/lista', views.lista_administrador, name="lista_admin"),
    path('administrador/nuevo', views.nuevo_administrador, name="nuevo_admin"),
    path('administrador/<int:id>/editar', views.editar_administrador, name="editar_admin"),
    path('administrador/<int:id>/eliminar', views.eliminar_administrador, name="eliminar_admin"),
    path('api/administrador', views.obtener_administradores, name="administradores"),
]