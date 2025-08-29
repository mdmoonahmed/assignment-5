## Questions

### 1. What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`?
_Answer:_
- **`getElementById`**
  returns a single element object with the matching 'id' which is always unique.The code is document.getElementById('id');
- **`getElementsByClassName`**
  returns a html collection of all the elements with matching 'class name'.The code is document.getElementByClassName('class-name');
-   **`querySelector`**
  returns the first element that matches a CSS selector (id,class,attribute etc.).The code is document.querySelector('.id/.class etc.');
- **`querySelectorAll`**
  returns a Nodelist of all elements that matches a CSS selector.The code is document.querySelectorAll('.id/.class etc.');
---

---

### 2. How do you create and insert a new element into the DOM?

- Step 1: Create a new element
const newDiv = document.createElement("div");

- Step 2: Add content or attributes
newDiv.textContent = "Hello World";
newDiv.className = "my-class";

- Step 3: Insert into DOM
document.body.appendChild(newDiv);

---

### 3. What is Event Bubbling and how does it work?

- Event Bubbling is the process where an event starts from the target element  and then propagates upward through its parent elements until it reaches the `document`.  
- Example: Clicking a `<span>` inside a `<div>` will trigger the `<span>` click first, then the `<div>` click, then the parent elements.

---

### 4. What is Event Delegation in JavaScript? Why is it useful?

- Event Delegation is a technique where instead of attaching an event listener to multiple child elements, you attach a single listener to a parent element and detect events through event bubbling.  
- Useful because:
  - Improves performance (fewer listeners).
  - Handles dynamically added elements automatically.
  - Keeps code cleaner.

---

### 5. What is the difference between `preventDefault()` and `stopPropagation()` methods?

- **`preventDefault()`**  
  prevents the default action of an event. As example the **form** tag by default refreshes everything after clicking **submit** button.So **preventDefault()** prevents this action.

- **`stopPropagation()`**  
  stops the event from bubbling further up the DOM tree.  
  It doesn’t stop the default action, only the event flow.

---


