/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package app.controllers;

import app.model.Menu;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author bragove
 */
@RequestMapping("/menu")
@Controller
public class menuController {

    @RequestMapping(value = "/item", method = RequestMethod.GET,produces = "application/json")
    @ResponseBody
    public String listaItem() {
        List<String> lista = new ArrayList<String>();
        lista.add(new Menu("pie_chart_outlined", "Dashboard").toString());
        lista.add(new Menu("pie_chart_outlined", "Dashboard").toString());
        lista.add(new Menu("pie_chart_outlined", "Dashboard").toString());
        lista.add(new Menu("pie_chart_outlined", "Dashboard").toString());
        lista.add(new Menu("pie_chart_outlined", "Dashboard").toString());
        return lista.toString();
    }
}
