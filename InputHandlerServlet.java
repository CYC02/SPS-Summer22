package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/input-handler")
public class InputHandlerServlet extends HttpServlet {

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

    String pref_list[] = new String[12];

    pref_list[0] = request.getParameter("area1");
    pref_list[1] = request.getParameter("area2");
    pref_list[2] = request.getParameter("area3");
    pref_list[3] = request.getParameter("area4");
    pref_list[4] = request.getParameter("area5");

    //getting the days of the week user would like to work out
    pref_list[5] = request.getParameter("day1");
    pref_list[6] = request.getParameter("day2");
    pref_list[7] = request.getParameter("day3");
    pref_list[8] = request.getParameter("day4");
    pref_list[9] = request.getParameter("day5");
    pref_list[10] = request.getParameter("day6");
    pref_list[11] = request.getParameter("day7");
    
    response.getWriter().println("You submitted: ");

    // Print the value so you can see it in the server logs.
    for (int i = 0; i < pref_list.length; i++){
        if (pref_list[i] != null){
            // Write the value to the response so the user can see it.
            response.getWriter().println(pref_list[i] + "\n");
        }
    }
  }
}
