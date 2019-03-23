/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package app.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author bragove
 */
@Controller
public class indexController {
    @RequestMapping(value = "/",method = RequestMethod.GET)
    public ModelAndView doIndex(){
        return new ModelAndView("index");
        
    }
}
