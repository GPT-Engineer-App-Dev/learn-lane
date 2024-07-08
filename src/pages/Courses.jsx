import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleEnroll = (course) => {
    setSelectedCourse(course);
  };

  const confirmEnrollment = () => {
    toast.success(`Successfully enrolled in ${selectedCourse}`);
    setSelectedCourse(null);
  };

  const courses = [
    "Introduction to Programming",
    "Advanced JavaScript",
    "React for Beginners",
  ];

  return (
    <div className="text-center">
      <h1 className="text-3xl">Courses</h1>
      <ul className="list-disc list-inside">
        {courses.map((course) => (
          <li key={course} className="flex justify-between items-center">
            {course}
            <Button variant="outline" onClick={() => handleEnroll(course)}>
              Enroll
            </Button>
          </li>
        ))}
      </ul>

      {selectedCourse && (
        <Dialog open={!!selectedCourse} onOpenChange={setSelectedCourse}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Enrollment</DialogTitle>
              <DialogDescription>
                Are you sure you want to enroll in {selectedCourse}?
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setSelectedCourse(null)}>
                Cancel
              </Button>
              <Button onClick={confirmEnrollment}>Confirm</Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Courses;