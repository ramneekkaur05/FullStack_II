import { useEffect, useState } from "react";

export default function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ id: "", name: "", course: "" });
  const [editingId, setEditingId] = useState(null);

  const API_URL = "http://localhost:8081/api/students";

  // Fetch all students
  const fetchStudents = async () => {
    try {
      const res = await fetch(`${API_URL}/get-all`);
      const data = await res.json();
      setStudents(data);
    } catch (err) {
      console.error("Error fetching students:", err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Add or Update student
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        // Update student
        await fetch(`${API_URL}/update/${editingId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: Number(form.id),
            name: form.name,
            course: form.course,
          }),
        });
        setEditingId(null);
      } else {
        // Add new student
        await fetch(`${API_URL}/add-student`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: Number(form.id),
            name: form.name,
            course: form.course,
          }),
        });
      }

      setForm({ id: "", name: "", course: "" });
      fetchStudents();
    } catch (err) {
      console.error("Error submitting student:", err);
    }
  };

  // Edit student
  const handleEdit = (student) => {
    setForm({ id: student.id, name: student.name, course: student.course });
    setEditingId(student.id);
  };

  // Delete student
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        await fetch(`${API_URL}/delete/${id}`, {
          method: "DELETE",
        });
        fetchStudents();
      } catch (err) {
        console.error("Error deleting student:", err);
      }
    }
  };

  // Cancel editing
  const handleCancel = () => {
    setForm({ id: "", name: "", course: "" });
    setEditingId(null);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Student Management System</h1>

      {/* Form */}
      <div style={styles.card}>
        <h2 style={styles.subtitle}>{editingId ? "Edit Student" : "Add Student"}</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            style={styles.input}
            type="number"
            placeholder="ID"
            value={form.id}
            onChange={(e) => setForm({ ...form, id: e.target.value })}
            disabled={editingId !== null}
            required
          />
          <input
            style={styles.input}
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            style={styles.input}
            type="text"
            placeholder="Course"
            value={form.course}
            onChange={(e) => setForm({ ...form, course: e.target.value })}
            required
          />
          <div style={styles.buttonGroup}>
            <button type="submit" style={styles.button}>
              {editingId ? "Update Student" : "Add Student"}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={handleCancel}
                style={{ ...styles.button, backgroundColor: "#6c757d" }}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Student List */}
      <div style={styles.card}>
        <h2 style={styles.subtitle}>Student List</h2>
        <div style={styles.grid}>
          {students.map((s) => (
            <div key={s.id} style={styles.studentCard}>
              <p style={styles.name}>{s.name}</p>
              <p>ID: {s.id}</p>
              <p>Course: {s.course}</p>
              <div style={styles.actionButtons}>
                <button
                  onClick={() => handleEdit(s)}
                  style={{ ...styles.actionButton, backgroundColor: "#28a745" }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(s.id)}
                  style={{ ...styles.actionButton, backgroundColor: "#dc3545" }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// CSS-in-JS Styles
const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#e4a4e0",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  card: {
    backgroundColor: "#a55ed2",
    padding: "20px",
    margin: "40px auto",
    borderRadius: "10px",
    maxWidth: "600px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  subtitle: {
    marginBottom: "15px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
  },
  buttonGroup: {
    display: "flex",
    gap: "10px",
  },
  actionButtons: {
    display: "flex",
    gap: "8px",
    marginTop: "10px",
  },
  actionButton: {
    padding: "6px 12px",
    borderRadius: "5px",
    border: "none",
    color: "white",
    cursor: "pointer",
    fontSize: "12px",
    flex: 1,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
  },
  studentCard: {
    color: "black",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#e4b8ec",
  },
  name: {
    fontWeight: "bold",
  },
};