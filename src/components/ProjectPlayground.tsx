import React, { useState } from 'react';
import { Terminal, Database, ShoppingCart, Sparkles, Search, Plus, Play, RefreshCw, CheckCircle, AlertTriangle, Navigation, Clock, User, ShieldCheck } from 'lucide-react';

export const ProjectPlayground: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dbms' | 'cart' | 'iot'>('dbms');

  // DBMS Simulator State
  const [students, setStudents] = useState([
    { id: '101', name: 'Niya Jayadevan', dept: 'CSE', gpa: '3.92', status: 'Enrolled', batch: '2024-2028' },
    { id: '102', name: 'Ananya S.', dept: 'ECE', gpa: '3.85', status: 'Enrolled', batch: '2024-2028' },
    { id: '103', name: 'Meera Nair', dept: 'CSE', gpa: '3.78', status: 'Enrolled', batch: '2024-2028' },
    { id: '104', name: 'Devika V.', dept: 'IT', gpa: '3.90', status: 'Enrolled', batch: '2024-2028' },
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentDept, setNewStudentDept] = useState('CSE');
  const [newStudentGpa, setNewStudentGpa] = useState('3.80');
  const [dbLog, setDbLog] = useState<string[]>(['[SQL Log] Connected to MySQL database @ localhost:3306']);

  // Cart Simulator State
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Data Structures Book', price: 45.0, qty: 1, stock: 10, type: 'Physical' },
    { id: 2, name: 'SQL Masterclass Video Course', price: 29.99, qty: 1, stock: 99, type: 'Digital' },
  ]);
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [cartError, setCartError] = useState<string | null>(null);

  // IoT Queue Simulator State
  const [selectedOffice, setSelectedOffice] = useState('Passport & Verification Desk');
  const [queueCount, setQueueCount] = useState(14);

  // DBMS Handlers
  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStudentName) return;
    const nextId = (100 + students.length + 1).toString();
    const newStudent = {
      id: nextId,
      name: newStudentName,
      dept: newStudentDept,
      gpa: newStudentGpa,
      status: 'Enrolled',
      batch: '2024-2028',
    };
    setStudents([...students, newStudent]);
    setDbLog((prev) => [
      ...prev,
      `[SQL EXEC] INSERT INTO students (id, name, dept, gpa) VALUES ('${nextId}', '${newStudentName}', '${newStudentDept}', ${newStudentGpa}); -- Row inserted!`,
    ]);
    setNewStudentName('');
  };

  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.id.includes(searchQuery) ||
      s.dept.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Cart Handlers
  const handleQtyChange = (id: number, delta: number) => {
    setCartError(null);
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = item.qty + delta;
          if (newQty > item.stock) {
            setCartError(`OutOfStockException: Item "${item.name}" stock limit is ${item.stock} units!`);
            return item;
          }
          return newQty < 1 ? item : { ...item, qty: newQty };
        }
        return item;
      })
    );
  };

  const applyCoupon = () => {
    if (couponCode.toUpperCase() === 'NIYA10') {
      setDiscountPercent(10);
      setCartError(null);
    } else {
      setCartError('Invalid Coupon Code! Try "NIYA10"');
    }
  };

  const cartSubtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const discountAmount = (cartSubtotal * discountPercent) / 100;
  const cartTotal = cartSubtotal - discountAmount;

  return (
    <section id="playground" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="border-gradient bg-neutral-900/60 rounded-[32px] p-6 sm:p-10 backdrop-blur space-y-8">
        {/* Playground Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-neutral-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-mono text-orange-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Live Demo</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Test System Prototypes
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Test live simulations of Niya's Student Information System, OOP Cart Simulator, and IoT Queue Estimator right in your browser.
            </p>
          </div>

          {/* Selector Tabs */}
          <div className="flex flex-wrap gap-2 bg-neutral-950 p-1.5 rounded-2xl border border-neutral-800">
            <button
              onClick={() => setActiveTab('dbms')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                activeTab === 'dbms'
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
              }`}
            >
              <Database className="w-4 h-4" />
              <span>DBMS Student System</span>
            </button>

            <button
              onClick={() => setActiveTab('cart')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                activeTab === 'cart'
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
              }`}
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Java OOP Cart</span>
            </button>

            <button
              onClick={() => setActiveTab('iot')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                activeTab === 'iot'
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
              }`}
            >
              <Navigation className="w-4 h-4" />
              <span>IoT Queue & Navigation</span>
            </button>
          </div>
        </div>

        {/* TAB 1: DBMS STUDENT SYSTEM */}
        {activeTab === 'dbms' && (
          <div className="space-y-6 animate-fade-slide">
            <div className="grid lg:grid-cols-12 gap-6">
              {/* Left Column: Search & Student Table */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="relative w-full sm:w-72">
                    <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search ID, name, or department..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500"
                    />
                  </div>
                  <span className="text-xs text-neutral-400 font-mono">
                    Showing {filteredStudents.length} MySQL records
                  </span>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-neutral-800 bg-neutral-950/80">
                  <table className="w-full text-left text-xs text-neutral-300">
                    <thead className="bg-neutral-900 border-b border-neutral-800 text-[11px] font-mono text-neutral-400 uppercase">
                      <tr>
                        <th className="p-3">ID</th>
                        <th className="p-3">Student Name</th>
                        <th className="p-3">Dept</th>
                        <th className="p-3">GPA</th>
                        <th className="p-3">Batch</th>
                        <th className="p-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-800/60 font-mono">
                      {filteredStudents.map((student) => (
                        <tr key={student.id} className="hover:bg-neutral-900/50 transition-colors">
                          <td className="p-3 text-orange-400 font-bold">#{student.id}</td>
                          <td className="p-3 text-white font-sans font-medium">{student.name}</td>
                          <td className="p-3">{student.dept}</td>
                          <td className="p-3 text-amber-300">{student.gpa}</td>
                          <td className="p-3 text-neutral-400">{student.batch}</td>
                          <td className="p-3">
                            <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                              {student.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Right Column: Add New Student & SQL Log */}
              <div className="lg:col-span-4 space-y-4">
                <form
                  onSubmit={handleAddStudent}
                  className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3"
                >
                  <h3 className="text-xs font-mono uppercase text-orange-400 font-bold flex items-center gap-1.5">
                    <Plus className="w-4 h-4" /> Add Record (INSERT SQL)
                  </h3>

                  <div>
                    <label className="text-[10px] text-neutral-400 block mb-1">Student Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kavya R."
                      value={newStudentName}
                      onChange={(e) => setNewStudentName(e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] text-neutral-400 block mb-1">Department</label>
                      <select
                        value={newStudentDept}
                        onChange={(e) => setNewStudentDept(e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-2 py-1.5 text-xs text-white focus:outline-none"
                      >
                        <option value="CSE">CSE</option>
                        <option value="ECE">ECE</option>
                        <option value="IT">IT</option>
                        <option value="EEE">EEE</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] text-neutral-400 block mb-1">GPA Score</label>
                      <input
                        type="number"
                        step="0.01"
                        min="2.00"
                        max="4.00"
                        value={newStudentGpa}
                        onChange={(e) => setNewStudentGpa(e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-medium text-xs transition-colors cursor-pointer"
                  >
                    Insert Student Record
                  </button>
                </form>

                {/* SQL Log Output */}
                <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 font-mono text-[11px] space-y-1 max-h-36 overflow-y-auto">
                  <div className="text-neutral-400 border-b border-neutral-800 pb-1 mb-2 font-bold">
                    Database Query Execution Log:
                  </div>
                  {dbLog.map((log, idx) => (
                    <div key={idx} className="text-emerald-400">
                      {log}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: JAVA OOP CART SIMULATOR */}
        {activeTab === 'cart' && (
          <div className="space-y-6 animate-fade-slide">
            <div className="grid lg:grid-cols-12 gap-6">
              {/* Cart Items List */}
              <div className="lg:col-span-8 space-y-4">
                <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4 text-orange-400" />
                  <span>Encapsulated Shopping Cart Items</span>
                </h3>

                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-between gap-4"
                    >
                      <div>
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-neutral-800 text-orange-400 mr-2">
                          {item.type}
                        </span>
                        <span className="text-sm font-semibold text-white">{item.name}</span>
                        <div className="text-xs text-neutral-400 mt-0.5">
                          Unit Price: <span className="text-amber-300 font-mono">${item.price.toFixed(2)}</span> | Stock Limit: {item.stock}
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex items-center border border-neutral-800 rounded-lg bg-neutral-900">
                          <button
                            onClick={() => handleQtyChange(item.id, -1)}
                            className="px-2 py-1 text-neutral-400 hover:text-white"
                          >
                            -
                          </button>
                          <span className="px-3 py-1 font-mono text-xs text-white font-bold">{item.qty}</span>
                          <button
                            onClick={() => handleQtyChange(item.id, 1)}
                            className="px-2 py-1 text-neutral-400 hover:text-white"
                          >
                            +
                          </button>
                        </div>
                        <span className="font-mono text-sm font-bold text-white w-20 text-right">
                          ${(item.price * item.qty).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {cartError && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>{cartError}</span>
                  </div>
                )}
              </div>

              {/* Checkout & Pricing Summary */}
              <div className="lg:col-span-4 p-5 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-4">
                <h3 className="text-xs font-mono uppercase text-orange-400 font-bold">
                  OOP Tax & Discount Calculator
                </h3>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-neutral-400">
                    <span>Subtotal</span>
                    <span className="font-mono text-white">${cartSubtotal.toFixed(2)}</span>
                  </div>

                  {discountPercent > 0 && (
                    <div className="flex justify-between text-emerald-400">
                      <span>Discount ({discountPercent}%)</span>
                      <span className="font-mono">-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="pt-2 border-t border-neutral-800 flex justify-between text-sm font-bold text-white">
                    <span>Total Amount</span>
                    <span className="font-mono text-amber-300">${cartTotal.toFixed(2)}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <label className="text-[10px] text-neutral-400 block mb-1">Coupon Code (Try "NIYA10")</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="NIYA10"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-1 text-xs text-white uppercase focus:outline-none"
                    />
                    <button
                      onClick={applyCoupon}
                      className="px-3 py-1 bg-neutral-800 hover:bg-neutral-700 text-xs text-white rounded-lg transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: IOT QUEUE & NAVIGATION CONCEPT */}
        {activeTab === 'iot' && (
          <div className="space-y-6 animate-fade-slide">
            <div className="grid lg:grid-cols-12 gap-6 items-center">
              {/* Office Selector */}
              <div className="lg:col-span-5 space-y-4">
                <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-orange-400" />
                  <span>2nd Prize Ideathon IoT Concept Demo</span>
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Simulates public government office queue sensor telemetry and predicts citizen waiting time to optimize civil administrative efficiency.
                </p>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-neutral-400">Select Government Desk:</label>
                  <select
                    value={selectedOffice}
                    onChange={(e) => {
                      setSelectedOffice(e.target.value);
                      setQueueCount(Math.floor(Math.random() * 20) + 5);
                    }}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-orange-500"
                  >
                    <option value="Passport & Verification Desk">Passport & Verification Desk</option>
                    <option value="Vehicle Registration Counter">Vehicle Registration Counter</option>
                    <option value="Civil Registry & Certificate Counter">Civil Registry & Certificate Counter</option>
                  </select>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-2 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-400">IoT Sensor Status:</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> Active Mesh
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-400">Telemetry Refresh Rate:</span>
                    <span className="text-white font-mono">Every 5 seconds</span>
                  </div>
                </div>
              </div>

              {/* Simulation Result Card */}
              <div className="lg:col-span-7 border-gradient p-6 rounded-3xl bg-neutral-950/80 space-y-5">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                  <div>
                    <span className="text-[10px] font-mono text-orange-400 uppercase">Live Prediction</span>
                    <h4 className="text-lg font-bold text-white">{selectedOffice}</h4>
                  </div>
                  <button
                    onClick={() => setQueueCount(Math.floor(Math.random() * 25) + 3)}
                    className="p-2 rounded-xl bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-800 flex items-center gap-1.5 text-xs"
                  >
                    <RefreshCw className="w-3.5 h-3.5 text-orange-400" />
                    <span>Re-scan Queue</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800">
                    <Clock className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                    <span className="text-2xl font-bold text-white font-mono">{queueCount * 3} mins</span>
                    <span className="text-[10px] text-neutral-400 block mt-0.5">Estimated Wait Time</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800">
                    <User className="w-5 h-5 text-orange-400 mx-auto mb-1" />
                    <span className="text-2xl font-bold text-white font-mono">{queueCount} citizens</span>
                    <span className="text-[10px] text-neutral-400 block mt-0.5">Ahead in Line</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-xs text-orange-300 flex items-center justify-between">
                  <span>Smart Navigation Suggestion:</span>
                  <span className="font-semibold text-white">Proceed to Desk #3 for express processing</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
