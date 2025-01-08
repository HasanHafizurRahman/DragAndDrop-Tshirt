```markdown
# T-Shirt Designer Application

This project is a simple T-shirt designer application where users can upload a logo, drag and drop it on a T-shirt canvas, resize it while maintaining its aspect ratio, and export the final design as an image.

## Key Packages Used

- **react-draggable**: Enables drag-and-drop functionality for the logo on the T-shirt canvas.
- **html2canvas**: Converts the canvas (T-shirt with logo) to an image format for export.
- **vite**: A modern build tool that provides fast development and building for React projects.

## Step-by-Step Thought Process

1. **Basic Setup**:
   - Initialized the project using `vite` and installed the required dependencies (`react-draggable` and `html2canvas`).
   - Set up the base structure with components `App.jsx`, `TShirtDesigner.jsx`, `TShirtCanvas.jsx`, and `Controls.jsx`.

2. **T-shirt Canvas and Logo Upload**:
   - Created a `TShirtCanvas` component to serve as the T-shirt design area.
   - Added a file input in the `Controls` component to allow users to upload a logo image.

3. **Draggable Logo**:
   - Used the `react-draggable` library to make the logo draggable across the T-shirt canvas.
   - Added logic to ensure smooth drag-and-drop functionality.

4. **Logo Resizing with Aspect Ratio**:
   - Integrated a slider for resizing the logo while maintaining the aspect ratio.
   - Calculated the aspect ratio of the uploaded logo and dynamically adjusted its dimensions during resizing.

5. **Export Functionality**:
   - Implemented the `html2canvas` library to export the designed T-shirt as a `.png` image.
   - Ensured the exported image accurately captured the T-shirt and logo design.

6. **UI Improvements**:
   - Styled the canvas, controls, and logo for a user-friendly interface using CSS.

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone <https://github.com/HasanHafizurRahman/DragAndDrop-Tshirt.git>
   ```

2. Navigate to the project directory:
   ```bash
   cd DragAndDrop-Tshirt
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the application in your browser at the provided localhost URL.

## How the Application Works

1. Click the "Choose File" button to upload a logo image.
2. Drag the uploaded logo to position it on the T-shirt canvas.
3. Use the slider below the logo to resize it while maintaining the aspect ratio.
4. Once satisfied with the design, click the "Export T-Shirt Design" button to download the image.

---
