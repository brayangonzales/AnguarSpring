/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package app.model;

/**
 *
 * @author bragove
 */
public class Menu {

    private String icono;
    private String titulo;
    
    public Menu(String icono,String titulo){
        this.icono=icono;
        this.titulo=titulo;
    }

    public String getIcono() {
        return icono;
    }

    public void setIcono(String icono) {
        this.icono = icono;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
    @Override
    public String toString(){
        return "{"+
                  "\"icono\":"+this.icono+","+
                  "\"titulo\":"+this.titulo+
                "}";
    }

}
