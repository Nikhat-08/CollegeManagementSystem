import React, { useState } from 'react';
import axios from 'axios';

const FileDownloader = () => {
  const [filename, setFilename] = useState('');
  const [fileData, setFileData] = useState(null);

  const handleFilenameChange = (e) => {
    setFilename(e.target.value);
  };

  const handleDownload = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/download/${filename}`, {
        responseType: 'arraybuffer',
      });

      setFileData(response.data);

      // For simplicity, you may choose to display the file content on the page or trigger a download.
      // For downloading, you can use the following code:
      // const blob = new Blob([response.data], { type: 'application/octet-stream' });
      // const url = window.URL.createObjectURL(blob);
      // const a = document.createElement('a');
      // a.href = url;
      // a.download = filename;
      // a.click();
      // window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Enter filename" value={filename} onChange={handleFilenameChange} />
      <button onClick={handleDownload}>Download File</button>

      {fileData && (
        <div>
          <h2>File Content:</h2>
          {/* Display the file content or handle the file data as needed */}
          <pre>{fileData.toString()}</pre>
        </div>
      )}
    </div>
  );
};

export default FileDownloader;
