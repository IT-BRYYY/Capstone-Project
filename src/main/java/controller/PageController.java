package controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/login/resident")
    public String residentLogin() {
        return "resident-login";
    }

    @GetMapping("/login/admin")
    public String adminLogin() {
        return "admin-login";
    }

    @GetMapping("/register")
    public String register() {
        return "register";
    }
}