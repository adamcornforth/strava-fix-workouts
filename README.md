# Strava Garmin Workout Fix

Garmin's Vivosmart HR watch doesn't upload rides to Strava as "Rides", it uploads them as "Workouts".

This is a little script that changes workouts from "workouts" to "rides".

> Note: I've invalidated the token that is in the source code. Try it if you want but it won't work :)

## Instructions 

Install with `npm install`, run with `node main.js`. 

## Sample Output 

```
$ node main.js                                            
Total rides 221 (12 pages)
Done: Workout Evening Activity Thu, 2/1/2018 3.80mi
Done: Workout Morning Activity Tue, 1/30/2018 4.92mi
Done: Workout Morning Activity Wed, 1/17/2018 5.06mi
Done: Workout Morning Activity Tue, 2/6/2018 4.94mi
Done: Workout Afternoon Activity Mon, 2/5/2018 4.62mi
Done: Workout Morning Activity Thu, 1/25/2018 4.96mi
Done: Workout Morning Activity Tue, 1/23/2018 4.81mi
Done: Workout Morning Activity Mon, 2/5/2018 5.07mi
Done: Workout Morning Activity Thu, 1/18/2018 5.05mi
Done: Workout Morning Activity Thu, 11/2/2017 3.87mi
Done: Workout Afternoon Activity Wed, 2/7/2018 4.93mi
Done: Workout Evening Activity Thu, 11/2/2017 2.96mi
Done: Workout Evening Activity Wed, 11/1/2017 3.61mi
...
```
