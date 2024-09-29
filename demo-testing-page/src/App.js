import React, { useState } from 'react';
import './App.css';
import Login from './Login'; // Import the Login component


function App() {
  const [inputText, setInputText] = useState('');
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('option1');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showLogin, setShowLogin] = useState(false); // State to toggle between pages

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  // Email validation function
  const validateEmail = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  return (
    <div className="App">
      <header data-testid="header">
        <h1 data-testid="header-title">Demo Testing Page</h1>
        <button onClick={toggleLogin} data-testid="toggle-login-button">
          {showLogin ? 'Go to Demo Page' : 'Go to Login Page'}
        </button>
        <p data-testid="header-description">This is a sample page to test various UI components.</p>
      </header>

      {showLogin ? (
        <Login />
      ) : (
        // Existing demo content goes here
        <div>
          {/* Existing demo components */}
          {/* ... */}
        </div>
      )}
      {/* Buttons */}
      <section>
        <h2>Buttons</h2>
        <button data-testid="button-1">Click Me</button>
        <button disabled data-testid="button-2">Disabled Button</button>
        <button className="primary" data-testid="button-primary">Primary Button</button>
        <button className="secondary" data-testid="button-secondary">Secondary Button</button>
      </section>

      {/* Input Fields */}
      <section>
        <h2>Input Fields</h2>
        <input
          type="text"
          placeholder="Enter text here"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          data-testid="input-text"
        />
        <input type="password" placeholder="Enter your password" data-testid="input-password" />
        <input type="search" placeholder="Search..." data-testid="input-search" />
      </section>

      {/* Email Input with Validation */}
      <section>
        <h2>Input Fields with Validation</h2>
        <label htmlFor="email">Email Address:</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={validateEmail}
          required
          data-testid="input-email"
        />
        {emailError && <p className="error" data-testid="email-error">{emailError}</p>}
      </section>

      {/* Drop-down Menu */}
      <section>
        <h2>Drop-down Menu</h2>
        <select data-testid="dropdown-menu">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </section>

      {/* Radio Buttons */}
      <section>
        <h2>Radio Buttons</h2>
        <label>
          <input
            type="radio"
            name="radio-group"
            value="option1"
            checked={radioValue === 'option1'}
            onChange={(e) => setRadioValue(e.target.value)}
            data-testid="radio-option-1"
          />
          Option 1
        </label>
        <label>
          <input
            type="radio"
            name="radio-group"
            value="option2"
            checked={radioValue === 'option2'}
            onChange={(e) => setRadioValue(e.target.value)}
            data-testid="radio-option-2"
          />
          Option 2
        </label>
      </section>

      {/* Checkboxes */}
      <section>
        <h2>Checkboxes</h2>
        <label>
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            data-testid="checkbox"
          />
          Check this box
        </label>
      </section>

      {/* Sliders */}
      <section>
        <h2>Slider</h2>
        <input type="range" min="1" max="100" data-testid="slider" />
      </section>

      {/* Form */}
      <section>
        <h2>Form</h2>
        <form onSubmit={(e) => { e.preventDefault(); alert('Form submitted!'); }} data-testid="form">
          <input type="text" placeholder="Form input" required data-testid="form-input" />
          <button type="submit" data-testid="form-submit">Submit</button>
        </form>
      </section>

      {/* Table */}
      <section>
        <h2>Table</h2>
        <table border="1" data-testid="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-testid="table-row1-name">John Doe</td>
              <td data-testid="table-row1-age">28</td>
              <td data-testid="table-row1-email">johndoe@example.com</td>
            </tr>
            <tr>
              <td data-testid="table-row2-name">Jane Smith</td>
              <td data-testid="table-row2-age">34</td>
              <td data-testid="table-row2-email">janesmith@example.com</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Accordion */}
      <section>
        <h2>Accordion</h2>
        <button onClick={() => setIsAccordionOpen(!isAccordionOpen)} data-testid="accordion-toggle">
          {isAccordionOpen ? 'Hide Accordion' : 'Show Accordion'}
        </button>
        {isAccordionOpen && (
          <div className="accordion-content" data-testid="accordion-content">
            <p>This is the accordion content, only visible when the accordion is open.</p>
          </div>
        )}
      </section>

      {/* Modal */}
      <section>
        <h2>Modal</h2>
        <button onClick={() => setIsModalOpen(true)} data-testid="open-modal-button">Open Modal</button>
        {isModalOpen && (
          <div className="modal" data-testid="modal">
            <div className="modal-content">
              <p>This is a modal!</p>
              <button onClick={() => setIsModalOpen(false)} data-testid="close-modal-button">Close Modal</button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
