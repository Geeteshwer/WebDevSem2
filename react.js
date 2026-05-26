function StudentCard(props) {
    const initials = props.name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2);

    return (
        <div className="student-card">
            <div className="student-top">
                <div className="avatar">{initials}</div>
                <div>
                    <h2>{props.name}</h2>
                    <p className="course">{props.studentClass}</p>
                </div>
            </div>

            <div className="student-details">
                <div className="detail-box">
                    <span className="label">Roll No</span>
                    <strong>{props.rollNo}</strong>
                </div>
                <div className="detail-box">
                    <span className="label">Age</span>
                    <strong>{props.age} Years</strong>
                </div>
                <div className="detail-box">
                    <span className="label">Email</span>
                    <strong>{props.email}</strong>
                </div>
                <div className="detail-box">
                    <span className="label">City</span>
                    <strong>{props.city}</strong>
                </div>
            </div>
        </div>
    );
}

function App() {
    const students = [
        {
            name: "Aman Sharma",
            rollNo: 101,
            studentClass: "BCA 2nd Year",
            age: 19,
            email: "aman101@gmail.com",
            city: "Delhi"
        },
        {
            name: "Priya Singh",
            rollNo: 102,
            studentClass: "BCA 2nd Year",
            age: 20,
            email: "priya102@gmail.com",
            city: "Jaipur"
        }
    ];

    return (
        <main className="app-shell">
            <section className="hero-section">
                <p className="eyebrow">React Student Dashboard</p>
                <h1>Student Information</h1>
                <p className="hero-text">
                    A simple and attractive frontend showing two student profiles
                    using HTML, CSS, JavaScript, and React.
                </p>
                <div className="stats-row">
                    <div className="stat-card">
                        <span className="stat-number">{students.length}</span>
                        <span className="stat-label">Students</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-number">BCA</span>
                        <span className="stat-label">Program</span>
                    </div>
                </div>
            </section>

            <section className="student-grid">
                {students.map((student) => (
                    <StudentCard
                        key={student.rollNo}
                        name={student.name}
                        rollNo={student.rollNo}
                        studentClass={student.studentClass}
                        age={student.age}
                        email={student.email}
                        city={student.city}
                    />
                ))}
            </section>
        </main>
    );
}

function Footer() {
    return (
        <footer className="footer-note">
            <p>Created with React components and custom CSS styling.</p>
        </footer>
    );
}

function RootApp() {
    return (
        <div className="page-wrapper">
            <App />
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RootApp />);
