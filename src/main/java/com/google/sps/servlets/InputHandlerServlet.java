package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.Collections;
import java.util.HashMap;

import com.google.gson.Gson;

@WebServlet("/input-handler")
public class InputHandlerServlet extends HttpServlet {
   
    Map <String, ArrayList<String>> scheduling_map = new HashMap<String, ArrayList<String>>();
   
    private static final Map <String, List<String>> all_exercises = Map.of(
        "Chest", List.of(
            "Incline Push-Up",
            "Barbell Bench Press",
            "Incline Bench Press", 
            "Chest Fly"
        ), "Arms", List.of(
            "Lateral Raise",
            "Overhead Extension",
            "Push-Ups",
            "Plank to Push-Up",
            "Tricep Dips",
            "Two-Arm Kettlebell Swing"
        ), "Abdomen", List.of(
            "Plank",
            "Bicycle Crunch",
            "Side Plank",
            "Vertical Leg Crunch",
            "Reverse Crunch",
            "Sit-Ups"
        ), "Legs", List.of(
            "Squats",
            "Deadlift",
            "Lunges",
            "Step-Up",
            "Hip Thrust",
            "Leg Press",
            "Leg Curl"
        )
    );

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

    String pref_list[] = new String[12];

    pref_list[0] = request.getParameter("chest"); //chest
    pref_list[1] = request.getParameter("arms"); //arms
    pref_list[2] = request.getParameter("abdomen"); //abdomen
    pref_list[3] = request.getParameter("legs"); //legs

    //getting the days of the week user would like to work out
    pref_list[5] = request.getParameter("day1"); //mon
    pref_list[6] = request.getParameter("day2");
    pref_list[7] = request.getParameter("day3"); 
    pref_list[8] = request.getParameter("day4");
    pref_list[9] = request.getParameter("day5");
    pref_list[10] = request.getParameter("day6");
    pref_list[11] = request.getParameter("day7"); //sun

    // to get the number of days
    int num_days = 0;
    List<String> diff_days = new ArrayList<String>();
    for (int i = 5; i < 12; i++){
        if (pref_list[i] != null){
            num_days += 1;
            diff_days.add(pref_list[i]);
        }
    }

    //4 is the number of target areas
    int num_exercises = 0;
    ArrayList<String> diff_exercises = new ArrayList<String>();

    for (int i = 0; i < 4; i++){
        if (pref_list[i] != null){

            String area = pref_list[i];
            List<String> target_exercises = all_exercises.get(area);

            ArrayList<Integer> temp = new ArrayList<Integer>();

            //pick 3 random exercises from each selected target area and print to the screen
            for (int j = 0; j < 3 ; j++){
                int random_exercise = (int) Math.floor(Math.random() * target_exercises.size());
                
                temp.add(random_exercise);
                
                //ensuring exercises arent repeated
                while (Collections.frequency(temp, random_exercise)>1){
                    int new_random_exercise = (int) Math.floor(Math.random() * target_exercises.size());
                    if (new_random_exercise != random_exercise){
                        temp.remove(temp.size()-1);
                        temp.add(new_random_exercise);
                        random_exercise = new_random_exercise;
                    }
                }
                
                diff_exercises.add(target_exercises.get(random_exercise));
            }
            num_exercises += 3;
        }
    }

    // now we have the num of exercises and days. Need to schedule num of exercises per day
    int exercises_per_day = (int)(diff_exercises.size()/num_days);
    Map <String, List<String>> scheduling_map = new HashMap<String, List<String>>();

    for (int i = 0; i < num_days; i++){
        String day = diff_days.get(i);
        ArrayList<String> exercises = new ArrayList<String>();
        for (int j = 0; j < exercises_per_day; j++){
           exercises.add(diff_exercises.get(0));
           diff_exercises.remove(0);
        }
        // add to mapp
        scheduling_map.put(day, exercises);
    }

    String json_string = new Gson().toJson(scheduling_map);
    response.setContentType("application/json;");
    response.getWriter().println(json_string);
  }
}


