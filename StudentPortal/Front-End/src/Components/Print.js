import React, { useState } from 'react';
import { renderToString } from 'react-dom/server';

const Print = (props) => {
  const [loading, setLoading] = useState(false);
  const { component, content, children } = props;
  const Trigger = component || children;

  const handleClick = () => {
    setLoading(true);

    const printWindow = document.createElement('iframe');
    printWindow.style.position = 'absolute';
    printWindow.style.top = '-1000px';
    printWindow.style.left = '-1000px';
    printWindow.id = 'printWindow';
    printWindow.title = 'Print Window';

    printWindow.onload = () => {
      const domDoc = printWindow.contentWindow.document;
      if (domDoc) {
        domDoc.open();
        domDoc.write(renderToString(content));
        domDoc.close();

        printWindow.contentWindow.focus();

        Promise.all(
          Array.from(domDoc.images).map((img) => {
            if (img.complete) return Promise.resolve();
            return new Promise((resolve, reject) => {
              img.addEventListener('load', resolve);
            });
          })
        )
          .then(() => {
            setLoading(false);
            printWindow.contentWindow.print();
          })
          .finally(() => {
            setLoading(false);
            const afterPrint = () => {
              removeFrame();
              window.removeEventListener('focus', afterPrint);
            };
            window.addEventListener('focus', afterPrint);
          });
      }
    };

    removeFrame();
    document.body.appendChild(printWindow);
  };

  const removeFrame = () => {
    const documentPrintWindow = document.getElementById('printWindow');
    if (documentPrintWindow) {
      document.body.removeChild(documentPrintWindow);
    }
  };

  if (Trigger) {
    if (loading) {
      return React.cloneElement(
        Trigger,
        { onClick: handleClick, disabled: { loading } },
        <i className="fas fa-spinner fa-spin"></i>
      );
    }
    return React.cloneElement(Trigger, { onClick: handleClick });
  }

  return (
    <button
      className="btn btn-success"
      onClick={handleClick}
      title="Print"
      disabled={loading}
    >
      {loading ? <i className="fas fa-spinner fa-spin"></i> : 'Print'}
    </button>
  );
};

export default Print;
