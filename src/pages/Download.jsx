import React, { useState } from 'react';
import '../App.css';

const BookCenter = () => {
  const materials = [
    {
      id: 1,
      title: 'Sample Material 1',
      description: 'This is the first sample material.',
      pdfLink: '/file.zip', 
    },
    {
      id: 2,
      title: 'Sample Material 2',
      description: 'This is the second sample material.',
      pdfLink: '/file.zip', 
    },
    {
      id: 2,
      title: 'Sample Material 3',
      description: 'This is the second sample material.',
      pdfLink: '/file.zip', 
    },
    {
      id: 2,
      title: 'Sample Material 4',
      description: 'This is the second sample material.',
      pdfLink: '/file.zip', 
    },
    {
      id: 2,
      title: 'Sample Material 5',
      description: 'This is the second sample material.',
      pdfLink: '/file.zip', 
    },
  ];

  const [currentPage] = useState(1);

  const handleDownload = (pdfLink) => {
    // Create a hidden anchor element to trigger the download
    const anchor = document.createElement('a');
    anchor.href = pdfLink;
    anchor.download = 'Vehicle Service Management System.pdf'; // You can specify the desired file name here
    anchor.style.display = 'none';

    // Append the anchor element to the document
    document.body.appendChild(anchor);

    // Trigger a click event on the anchor to initiate the download
    anchor.click();

    // Remove the anchor element from the document
    document.body.removeChild(anchor);

    // Show a success message
    alert('File successfully downloaded.');
  };

  return (
    <div>
      {currentPage === 1 ? (
        <div>
          <h1 className='h1'>BookCenter</h1>
          <center>
            <ul>
              {materials.map((material) => (
                <li key={material.id}>
                  <h2>{material.title}</h2>
                  <p>{material.description}</p>
                  <button onClick={() => handleDownload(material.pdfLink)}>Download</button>
                </li>
              ))}
            </ul>
          </center>
        </div>
      ) : (
        // Content for Page 2 can go here
        <div>
          <h1 className='h1'>Page 2</h1>
          {/* Add content for Page 2 */}
        </div>
      )}
    </div>
  );
};
export default BookCenter;