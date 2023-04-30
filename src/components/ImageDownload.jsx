import React from 'react';

class ImageDownload extends React.Component {
  downloadImage = () => {
    const { src, filename } = this.props;
    const downloadLink = document.createElement('a');
    downloadLink.href = src;
    downloadLink.download = filename;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  render() {
    const { src } = this.props;

    return (
      <div>
        <img src={src} alt="Downloadable Image" />
        <button onClick={this.downloadImage}>Download</button>
      </div>
    );
  }
}

export default ImageDownload;
