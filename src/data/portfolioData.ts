import { PersonalInfo, SkillCategory, Project, Achievement, Education, SoftSkill } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Niya Jayadevan',
  title: 'Computer Science & Engineering Student',
  degree: 'B.Tech in Computer Science and Engineering',
  institution: 'LBS Institute of Technology For Women, Poojapura',
  batch: '2024 - 2028',
  location: 'Thiruvananthapuram, Kerala',
  email: 'niyajayadevanixb@gmail.com',
  phone: '8921412421',
  about:
    'Aspiring Computer Science student with a passion for solving real-world problems through technology. Possess a strong foundation in programming, along with hands-on experience in developing projects in web development, database management systems, and smart IoT concepts. Deeply interested in artificial intelligence, cybersecurity, and scalable software engineering.',
  status: 'Open for Internships & Collaborations',
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Core Programming',
    subtitle: 'Languages & Algorithms',
    icon: 'code',
    skills: [
      { name: 'Python', proficiency: 'Familiar', tag: 'Scripting & Backend' },
      { name: 'Java', proficiency: 'Familiar', tag: 'OOP & Data Structures' },
      { name: 'C Programming', proficiency: 'Familiar', tag: 'System Fundamentals' },
      { name: 'JavaScript', proficiency: 'Proficient', tag: 'Web Logic' },
    ],
  },
  {
    title: 'Database & Backend',
    subtitle: 'Data Architecture',
    icon: 'database',
    skills: [
      { name: 'MySQL', proficiency: 'Proficient', tag: 'Relational DB' },
      { name: 'DBMS Concepts', proficiency: 'Proficient', tag: 'Normalized Schemas' },
      { name: 'SQL Querying', proficiency: 'Proficient', tag: 'CRUD Operations' },
      { name: 'Python DB Connectors', proficiency: 'Familiar', tag: 'Integration' },
    ],
  },
  {
    title: 'Web Engineering',
    subtitle: 'Frontend & UI Design',
    icon: 'layout',
    skills: [
      { name: 'HTML5', proficiency: 'Proficient', tag: 'Semantic Markup' },
      { name: 'CSS3 & Modern Styling', proficiency: 'Proficient', tag: 'Responsive Design' },
      { name: 'JavaScript / ES6+', proficiency: 'Proficient', tag: 'Interactivity' },
      { name: 'React & Modern UI', proficiency: 'Proficient', tag: 'Component Architecture' },
    ],
  },
  {
    title: 'Specialized Domains',
    subtitle: 'Exploration & Research',
    icon: 'cpu',
    skills: [
      { name: 'Artificial Intelligence', proficiency: 'Familiar', tag: 'Intelligent Systems' },
      { name: 'Cybersecurity Principles', proficiency: 'Familiar', tag: 'API & Data Shielding' },
      { name: 'IoT Systems & Hardware', proficiency: 'Familiar', tag: 'Smart Sensors' },
      { name: 'Git & Version Control', proficiency: 'Proficient', tag: 'Collaboration' },
    ],
  },
];

export const softSkills: SoftSkill[] = [
  {
    title: 'Team Collaboration & Coordination',
    description: 'Active contributor in cross-functional hackathon teams, fostering open communication and rapid prototyping.',
  },
  {
    title: 'Stage Confidence & Communication',
    description: 'Proven ability to present technical pitches, such as award-winning Ideathon presentations, with clarity and impact.',
  },
  {
    title: 'Resilience & Pressure Handling',
    description: 'Thrives in fast-paced hackathons and dynamic technical challenges under strict submission deadlines.',
  },
  {
    title: 'Time Management & Discipline',
    description: 'Consistently balances rigorous BTech academics, hands-on software projects, and competition preparation.',
  },
];

export const projects: Project[] = [
  {
    id: 'student-sims',
    title: 'Student Information Management System',
    type: 'DBMS & Full-Stack Project',
    period: '2024',
    summary: 'A web-based database application for centralizing student records, attendance, and academic performance with full CRUD functionality.',
    fullDescription:
      'Developed a robust Student Information Management System designed to eliminate paper-based record-keeping in educational institutions. Built with a Python-based server and MySQL database, the application enables administrators to register students, update attendance records, search student profiles by register number, and generate performance reports cleanly.',
    techStack: ['Python', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'SQL'],
    keyFeatures: [
      'Normalized relational database design avoiding data redundancy',
      'Secure CRUD operations for student profiles, courses, and marks',
      'Instant keyword and ID search with responsive data tables',
      'Role-based view logic for faculty and administration',
    ],
    architectureNotes: '3-tier architecture with normalized MySQL tables connected via Python database drivers and styled with custom responsive CSS.',
    metrics: [
      { label: 'Database Operations', value: '100% CRUD' },
      { label: 'Search Latency', value: '< 15ms' },
    ],
    codeSnippet: {
      language: 'python',
      filename: 'db_manager.py',
      code: `import mysql.connector

def fetch_student_by_id(student_id):
    connection = mysql.connector.connect(
        host="localhost",
        user="root",
        password="secure_password",
        database="student_db"
    )
    cursor = connection.cursor(dictionary=True)
    query = """
        SELECT s.id, s.name, s.department, s.batch, 
               AVG(g.grade) as gpa
        FROM students s
        LEFT JOIN grades g ON s.id = g.student_id
        WHERE s.id = %s
        GROUP BY s.id
    """
    cursor.execute(query, (student_id,))
    result = cursor.fetchone()
    cursor.close()
    connection.close()
    return result`,
    },
  },
  {
    id: 'hackathon-techfest',
    title: 'Technical Fest Website',
    type: 'Google Solutions Hackathon Project',
    period: '2024',
    summary: 'An interactive web portal built during Google Solutions Hackathon to streamline event schedules, speaker profiles, and live registrations.',
    fullDescription:
      'Designed and deployed a prototype website for college technical festivals. Built during a competitive hackathon, the platform features dynamic event category browsing (Coding, Robotics, Paper Presentation), real-time schedule filtering, interactive registration modals, and quick seat availability counters.',
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'Google API Mock', 'Responsive UI'],
    keyFeatures: [
      'Interactive event schedule with real-time category filtering',
      'Modal-based fast registration flow with confirmation state',
      'Mobile-optimized touch targets for on-the-go student attendees',
      'Sleek dark-mode theme designed for tech enthusiasts',
    ],
    architectureNotes: 'Client-side reactive architecture with smooth transition states, local session state storage, and dynamic event rendering.',
    metrics: [
      { label: 'Hackathon Scope', value: 'Google Solutions' },
      { label: 'UI Response Time', value: 'Instant' },
    ],
    codeSnippet: {
      language: 'javascript',
      filename: 'eventRegister.js',
      code: `// Dynamic event registration trigger
export function handleEventRegistration(eventId, studentDetails) {
  const selectedEvent = eventsCatalog.find(e => e.id === eventId);
  if (!selectedEvent) return { success: false, message: 'Event not found' };
  
  if (selectedEvent.seatsRemaining <= 0) {
    return { success: false, message: 'Event fully booked!' };
  }
  
  selectedEvent.seatsRemaining -= 1;
  const registrationTicket = {
    ticketId: 'TCK-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
    event: selectedEvent.name,
    student: studentDetails.name,
    timestamp: new Date().toISOString()
  };
  
  return { success: true, ticket: registrationTicket };
}`,
    },
  },
  {
    id: 'insurance-claims',
    title: 'Insurance Policy & Claims Management System',
    type: 'Backend & Relational DB System',
    period: '2024',
    summary: 'A normalized MySQL and Python management system handling policy creation, customer tracking, claim validation, and lifecycle status updates.',
    fullDescription:
      'Engineered a comprehensive claims lifecycle management system. The project focuses on relational schema normalization (3NF) to ensure data integrity across policyholders, policy types, agent assignments, and claim submissions. Includes automated state transitions from Claim Filed -> Under Review -> Approved/Rejected.',
    techStack: ['Python', 'MySQL', 'Relational Schema Design', 'SQL Triggers'],
    keyFeatures: [
      '3rd Normal Form (3NF) schema design ensuring non-redundancy',
      'Automated claim status lifecycle management with validation',
      'Relational audit tables tracking policy modification history',
      'Detailed analytical queries calculating total claim payables',
    ],
    architectureNotes: 'Python CLI/Backend controller with parametric SQL query execution and foreign key integrity constraints.',
    metrics: [
      { label: 'Schema Form', value: '3NF Normalized' },
      { label: 'Lifecycle States', value: '4 Managed' },
    ],
    codeSnippet: {
      language: 'sql',
      filename: 'schema.sql',
      code: `-- Relational Schema for Claims Management
CREATE TABLE Policyholders (
    policyholder_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Claims (
    claim_id INT PRIMARY KEY AUTO_INCREMENT,
    policy_id INT NOT NULL,
    claim_amount DECIMAL(10, 2) NOT NULL,
    claim_status ENUM('FILED', 'UNDER_REVIEW', 'APPROVED', 'REJECTED') DEFAULT 'FILED',
    incident_date DATE NOT NULL,
    FOREIGN KEY (policy_id) REFERENCES Policies(policy_id) ON DELETE CASCADE
);`,
    },
  },
  {
    id: 'cart-oop-java',
    title: 'Cart Management System',
    type: 'Object-Oriented Java Project',
    period: '2024',
    summary: 'An OOP-driven shopping cart simulator applying encapsulation, inheritance, polymorphism, and custom exception handling.',
    fullDescription:
      'Built a Java desktop/CLI shopping cart simulator demonstrating fundamental Object-Oriented Programming principles. Features an abstract Item hierarchy (Physical Product, Digital Goods, Subscriptions), encapsulated pricing & tax engines, custom exceptions for out-of-stock items, and polymorphic discount calculation algorithms.',
    techStack: ['Java', 'OOP Concepts', 'Inheritance', 'Exception Handling'],
    keyFeatures: [
      'Polymorphic discount calculations for physical vs. digital items',
      'Strict encapsulation guarding item prices and stock inventory',
      'Custom Java Exception handling for edge cases (e.g., InsufficientStockException)',
      'Clean console and graphical summary outputs',
    ],
    architectureNotes: 'Class structure utilizing interfaces, abstract classes, encapsulation getters/setters, and robust exception propagation.',
    metrics: [
      { label: 'Core OOP Principles', value: '4/4 Applied' },
      { label: 'Exception Handling', value: 'Custom System' },
    ],
    codeSnippet: {
      language: 'java',
      filename: 'ShoppingCart.java',
      code: `public class ShoppingCart {
    private List<CartItem> items = new ArrayList<>();
    
    public void addItem(CartItem item, int quantity) throws OutOfStockException {
        if (item.getAvailableStock() < quantity) {
            throw new OutOfStockException("Requested quantity exceeds current stock for " + item.getName());
        }
        items.add(new CartItem(item, quantity));
    }
    
    public double calculateTotalWithTax(TaxStrategy taxStrategy) {
        double subtotal = items.stream().mapToDouble(CartItem::getSubtotal).sum();
        return subtotal + taxStrategy.calculateTax(subtotal);
    }
}`,
    },
  },
];

export const achievements: Achievement[] = [
  {
    id: 'ideathon-2nd',
    title: 'Second Prize in Ideathon',
    award: '2nd Place Winner',
    organization: 'State / College Innovation Challenge',
    description:
      'Secured 2nd Prize for presenting an innovative IoT-based smart device concept designed to predict waiting times and provide navigation assistance in government offices, significantly improving citizen experience and administrative efficiency.',
    keyTakeaways: [
      'Conceptualized IoT sensor mesh for queue monitoring',
      'Designed real-time citizen-facing navigation interface concept',
      'Pitched to technical jury with strong focus on public impact',
    ],
    badgeText: '🏆 2nd Prize Winner',
  },
  {
    id: 'hackathons-participation',
    title: 'Active Hackathon Competitor',
    award: 'Recognized Innovator',
    organization: 'Google Solutions Hackathon & Technical Fests',
    description:
      'Recognized for active participation and high-impact contributions in college hackathons and technical events, consistently demonstrating rapid problem-solving, rapid prototyping under time limits, and effective teamwork.',
    keyTakeaways: [
      'Google Solutions Hackathon project prototyping',
      'Collaborative team building & rapid UI wireframing',
      'End-to-end presentation of web-based software prototypes',
    ],
    badgeText: '🚀 Hackathon Innovator',
  },
];

export const education: Education[] = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'LBS Institute of Technology For Women, Poojapura',
    period: '2024 - 2028',
    location: 'Thiruvananthapuram, Kerala',
    details: [
      'Focusing on Core Computer Science: Data Structures, DBMS, Object-Oriented Programming, and Web Engineering.',
      'Active participant in technical hackathons, ideathons, and coding events.',
      'Developing web-based applications and relational database projects.',
    ],
  },
  {
    degree: 'High School Education',
    institution: 'Carmel Girls Higher Secondary School',
    period: 'Completed with Excellence',
    location: 'Vazhuthacaud, Thiruvananthapuram',
    details: [
      'Strong academic foundation in Mathematics, Physics, and Computer Science.',
      'Developed early passion for logic building, public speaking, and team leadership.',
    ],
  },
];
