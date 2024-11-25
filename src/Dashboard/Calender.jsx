import React, { useState } from "react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date(); // Get today's date

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const firstDay = getFirstDayOfMonth(currentDate);
  const daysInMonth = getDaysInMonth(currentDate);

  const days = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(null); // Empty slots for days before the start of the month
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return (
    <div className="max-w-lg max-h-fit mx-auto mt-5 p-4 border rounded-lg shadow-md bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePrevMonth}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          &lt;
        </button>
        <h2 className="text-xl font-semibold">
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </h2>
        <button
          onClick={handleNextMonth}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          &gt;
        </button>
      </div>

      {/* Days of the Week */}
      <div className="grid grid-cols-7 text-center text-gray-600 font-semibold">
        {daysOfWeek.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 text-center mt-2">
        {days.map((day, index) => {
          const isToday =
            day &&
            today.getDate() === day &&
            today.getMonth() === currentDate.getMonth() &&
            today.getFullYear() === currentDate.getFullYear();

          return (
            <div
              key={index}
              className={`p-2 h-auto flex items-center justify-center rounded-lg ${
                isToday
                  ? "bg-red-500 text-white font-bold" // Style for today
                  : day
                  ? "bg-gray-100 text-gray-800 hover:bg-purple-100"
                  : ""
              }`}
            >
              {day || ""}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
