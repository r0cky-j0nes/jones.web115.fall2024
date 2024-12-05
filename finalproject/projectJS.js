function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function generateMealPlan() {
    const form = document.getElementById("mealPlanForm");

    const name = form.name.value;
    const email = form.email.value;
    const goal = form.goal.value;

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const meals = ["Breakfast", "Snack1", "Lunch", "Snack2", "Dinner"];
    const plan = {};

    days.forEach(day => {
        plan[day] = {};
        meals.forEach(meal => {
            const inputName = `${day.toLowerCase()}${meal}`;
            plan[day][meal] = form[inputName]?.value || "N/A";
        });
    });

    document.write("<!DOCTYPE html>");
    document.write("<html lang='en'>");
    document.write("<head><title>Your Weekly Meal Plan</title></head>");
    document.write("<body>");
    document.write(`<h1>${name}'s Weekly Meal Plan</h1>`);
    document.write(`<p>Email: ${email}</p>`);
    document.write(`<p>Goal for the Week: ${goal}</p>`);

    document.write("<table border='1'>");
    document.write("<tr><th>Day</th><th>Breakfast</th><th>Snack</th><th>Lunch</th><th>Snack</th><th>Dinner</th></tr>");
    for (const day of days) {
        document.write(`<tr>
            <td>${day}</td>
            <td>${plan[day].Breakfast}</td>
            <td>${plan[day].Snack1}</td>
            <td>${plan[day].Lunch}</td>
            <td>${plan[day].Snack2}</td>
            <td>${plan[day].Dinner}</td>
        </tr>`);
    }
    document.write("</table>");

    document.write("</body></html>");
}
