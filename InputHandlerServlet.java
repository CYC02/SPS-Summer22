package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.util.List;
import java.util.ArrayList;

@WebServlet("/input-handler")
public class InputHandlerServlet extends HttpServlet {

    private static final List<List<String>> all_exercises = new ArrayList<>();
    private static final List<String> chest = new ArrayList<>();
    private static final List<String> arms = new ArrayList<>();
    private static final List<String> abdomen = new ArrayList<>();
    private static final List<String> legs = new ArrayList<>();

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

    add_exercises();

    String pref_list[] = new String[12];

    pref_list[0] = request.getParameter("area1"); //chest
    pref_list[1] = request.getParameter("area2"); //arms
    pref_list[2] = request.getParameter("area3"); //abdomen
    pref_list[3] = request.getParameter("area4"); //legs

    //getting the days of the week user would like to work out
    pref_list[5] = request.getParameter("day1"); //mon
    pref_list[6] = request.getParameter("day2");
    pref_list[7] = request.getParameter("day3");
    pref_list[8] = request.getParameter("day4");
    pref_list[9] = request.getParameter("day5");
    pref_list[10] = request.getParameter("day6");
    pref_list[11] = request.getParameter("day7"); //sun

    //4 is the number of target areas
    for (int i = 0; i < 4; i++){
        if (pref_list[i] != null){

            List<String> area = all_exercises.get(i);
            response.getWriter().println(pref_list[i] + "<br/>");
            response.getWriter().println("<br/>");

            //pick 3 random exercises from each selected target area and print to the screen
            for (int j = 0; j<3; j++){
                int random_exercise = (int) Math.floor(Math.random() * area.size());
                response.getWriter().println(area.get(random_exercise) + "<br/>");
                area.remove(random_exercise);
            }
            response.getWriter().println("<br/>");
        }
    }
  }

public void add_exercises(){

    chest.add("Incline Push Up");
    chest.add("Barbell Bench Press");
    chest.add("Incline Bench Press");
    chest.add("Machine Chest Press");
    chest.add("Dips");
    chest.add("Dumbell Pull-Over");

    arms.add("Lateral Raise");
    arms.add("Overhead Extension");
    arms.add("Push-Ups");
    arms.add("Plank to Push-Up");
    arms.add("Tricep Dips");
    arms.add("Two-Arm Kettlebell Swing");

    abdomen.add("Plank");
    abdomen.add("Bicycle Crunch");
    abdomen.add("Side Plank");
    abdomen.add("Vertical Leg Crunch");
    abdomen.add("Reverse Crunch");
    abdomen.add("Sit-Ups");

    legs.add("Squats");
    legs.add("Deadlift");
    legs.add("Lunges");
    legs.add("Step-Up");
    legs.add("Hip Thrust");
    legs.add("Leg Press");
    legs.add("Leg Curl");

    all_exercises.add(chest);
    all_exercises.add(arms);
    all_exercises.add(abdomen);
    all_exercises.add(legs);
}
}

