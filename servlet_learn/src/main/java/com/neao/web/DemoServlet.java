package com.neao.web;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * @author neao
 */
@WebServlet("/DemoServlet")
public class DemoServlet extends HttpServlet {

    private String message;

    @Override
    public void init(ServletConfig config) throws ServletException {
        message = "demo servlet";
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<h3>" + message + "</h3>");
    }

    @Override
    public void destroy() {
        System.out.println("bye");
    }
}
