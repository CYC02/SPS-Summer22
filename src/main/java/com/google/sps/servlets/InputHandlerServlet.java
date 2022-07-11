// package com.google.sps.servlets;

// import java.io.IOException;
// import javax.servlet.annotation.WebServlet;
// import javax.servlet.http.HttpServlet;
// import javax.servlet.http.HttpServletRequest;
// import javax.servlet.http.HttpServletResponse;

// import java.util.List;
// import java.util.ArrayList;
// import java.util.Map;
// import java.util.Collections;

// @WebServlet("/input-handler")
// public class InputHandlerServlet extends HttpServlet {
   
//     //HashMap<String, List<String>> all_exercises = new HashMap<Integer, List<String>> ();
//     private static final Map <String, List<String>> all_exercises = Map.of(
//         "Chest", List.of(
//             "Incline Push-Up",
//             "Barbell Bench Press",
//             "Incline Bench Press"
//         ), "Arms", List.of(
//             "Lateral Raise",
//             "Overhead Extension",
//             "Push-Ups",
//             "Plank to Push-Up",
//             "Tricep Dips",
//             "Two-Arm Kettlebell Swing"
//         ), "Abdomen", List.of(
//             "Plank",
//             "Bicycle Crunch",
//             "Side Plank",
//             "Vertical Leg Crunch",
//             "Reverse Crunch",
//             "Sit-Ups"
//         ), "Legs", List.of(
//             "Squats",
//             "Deadlift",
//             "Lunges",
//             "Step-Up",
//             "Hip Thrust",
//             "Leg Press",
//             "Leg Curl"
//         )
//     );

//   @Override
//   public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

//     String pref_list[] = new String[12];

//     pref_list[0] = request.getParameter("chest"); //chest
//     pref_list[1] = request.getParameter("arms"); //arms
//     pref_list[2] = request.getParameter("abdomen"); //abdomen
//     pref_list[3] = request.getParameter("legs"); //legs

//     //getting the days of the week user would like to work out
//     pref_list[5] = request.getParameter("day1"); //mon
//     pref_list[6] = request.getParameter("day2");
//     pref_list[7] = request.getParameter("day3");
//     pref_list[8] = request.getParameter("day4");
//     pref_list[9] = request.getParameter("day5");
//     pref_list[10] = request.getParameter("day6");
//     pref_list[11] = request.getParameter("day7"); //sun

//     // to get the number of days
//     int num_days = 0;
//     List<String> diff_days = new ArrayList<String>();
//     for (int i = 5; i < 12; i++){
//         if (pref_list[i] != null){
//             num_days += 1;
//             diff_days.add(pref_list[i]);
//         }
//     }

//     //4 is the number of target areas
//     int num_exercises = 0;
//     List<String> diff_exercises = new ArrayList<String>();
//     for (int i = 0; i < 4; i++){
//         if (pref_list[i] != null){

//             String area = pref_list[i];
//             List<String> target_exercises = all_exercises.get(area);
//             response.getWriter().println(pref_list[i] + "<br/>");
//             response.getWriter().println("<br/>");

//             ArrayList<Integer> temp = new ArrayList<Integer>();

//             //pick 3 random exercises from each selected target area and print to the screen
//             for (int j = 0; j<3 ; j++){
//                 int random_exercise = (int) Math.floor(Math.random() * target_exercises.size());
                
//                 temp.add(random_exercise);
                

//                 while (Collections.frequency(temp, random_exercise)>1){
//                     random_exercise = (int) Math.floor(Math.random() * target_exercises.size());
//                 }
//                 diff_exercises.add(target_exercises.get(random_exercise));
//                 response.getWriter().println(target_exercises.get(random_exercise) + "<br/>");
//             }
//             num_exercises += 3;
//             temp.clear();
//             response.getWriter().println("<br/>");
//         }
//     }

//     // now we have the num of exercises and days. Need to schedule num of exercises per day
//     int exercises_per_day = (int)(num_exercises/num_days);
//     Map <String, List<String>> scheduling_map = new HashMap<String, List<String>>();

//     for (int i = 0; i < diff_days.size(); i++){
//         day = diff_days.get(i);
//         List<String> exercises = new ArrayList<String>();
//         for (int j = 0; j < exercises_per_day; j++){
//             exercises.add(diff_exercises.get(j));
//             diff_exercises.remove(j);
//         }
//     // add to mapp
//         scheduling_map.put(day, exercises);
//     }
//   }
// }


