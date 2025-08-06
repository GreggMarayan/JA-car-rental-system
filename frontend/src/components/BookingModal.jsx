import React, { useState } from "react";

function BookingModal({ car, onClose, onSubmit }) {
  const [tab, setTab] = useState("delivery");
  const [form, setForm] = useState({
    carName: car.name,
    purpose: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    deliveryLocation: "",
    dropOffLocation: "",
    selfDrive: "Yes",
    phone: "",
    fbLink: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...form, bookingType: tab });
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 w-[500px] max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          className="absolute top-2 right-3 text-2xl font-bold"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-4">Book {car.name}</h2>

        {/* Tabs */}
        <div className="flex border-b mb-4">
          <button
            type="button"
            className={`flex-1 py-2 ${
              tab === "delivery" ? "border-b-2 bg-red-600 font-bold" : ""
            }`}
            onClick={() => setTab("delivery")}
          >
            Delivery
          </button>
          <button
            type="button"
            className={`flex-1 py-2 ${
              tab === "pickup" ? "border-b-2 bg-red-600 font-bold" : ""
            }`}
            onClick={() => setTab("pickup")}
          >
            Pick-up
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Purpose */}
          <div>
            <label className="block mb-1 font-medium">Purpose</label>
            <input
              name="purpose"
              value={form.purpose}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Start date & time */}
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="block mb-1 font-medium">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={form.startDate}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1 font-medium">Start Time</label>
              <input
                type="time"
                name="startTime"
                value={form.startTime}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
          </div>

          {/* End date & time */}
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="block mb-1 font-medium">End Date</label>
              <input
                type="date"
                name="endDate"
                value={form.endDate}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1 font-medium">End Time</label>
              <input
                type="time"
                name="endTime"
                value={form.endTime}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
          </div>

          {/* Location field changes with tab */}
          <div>
            <label className="block mb-1 font-medium">
              {tab === "delivery" ? "Delivery Location" : "Pick-up Location"}
            </label>
            <input
              name="deliveryLocation"
              value={form.deliveryLocation}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Drop-off location */}
          <div>
            <label className="block mb-1 font-medium">Drop-off Location</label>
            <input
              name="dropOffLocation"
              value={form.dropOffLocation}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Self-drive */}
          <div>
            <label className="block mb-1 font-medium">Self-drive</label>
            <select
              name="selfDrive"
              value={form.selfDrive}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Facebook */}
          <div>
            <label className="block mb-1 font-medium">Facebook Link</label>
            <input
              name="fbLink"
              value={form.fbLink}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-red-600"
          >
            REQUEST
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingModal;
