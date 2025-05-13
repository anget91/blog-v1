// src/components/MarkdownRendererText.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Props {
  contenido: string;
}

const MarkdownRendererText: React.FC<Props> = ({ contenido }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        p({ node, ...props }) {
          return <p className="my-2" {...props} />;
        },
        h1({ node, ...props }) {
          return <h1 className="text-h1" {...props} />;
        },
        h2({ node, ...props }) {
          return <h2 className="text-h2" {...props} />;
        },
        h3({ node, ...props }) {
          return <h3 className="text-h3" {...props} />;
        },
        a({ node, ...props }) {
          return <a className="text-link " target='_blank' {...props} />;
        },
        li({ node, ...props }) {
          return <li className="ml-4 list-disc" {...props} />;
        },
        blockquote({ node, ...props }) {
          return (
            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4" {...props} />
          );
        },
        hr() {
          return <hr className="my-4 border-gray-300" />;
        },
        table({ node, ...props }) {
          return (
            <table className="table-auto border-collapse border border-gray-300 my-4" {...props} />
          );
        },
        th({ node, ...props }) {
          return (
            <th className="border border-gray-300 px-4 py-2 bg-gray-100" {...props} />
          );
        },
        td({ node, ...props }) {
          return <td className="border border-gray-300 px-4 py-2" {...props} />;
        },
        del({ node, ...props }) {
          return <del className="line-through" {...props} />;
        },
        input({ node, ...props }) {
          return <input type="checkbox" className="mr-2" disabled {...props} />;
        },
        strong({ node, ...props }) {
          return (
            <span className="font-semibold text-purple-400" {...props} />
          );
        },
        em({ node, ...props }) {
          return (
            <span className="italic text-blue-500" {...props} />
          );
        },
        code({ node, className, children, ...props }) {
          const isInline = node?.position?.start?.line === node?.position?.end?.line;
          return isInline ? (
            <span className="bg-gray-100 px-1 rounded text-sm font-mono" {...props}>
              {children}
            </span>
          ) : (
            <pre className="bg-gray-100 p-2 rounded my-2 overflow-x-auto">
              <code className="text-sm font-mono text-green-500" {...props}>
                {children}
              </code>
            </pre>
          );
        },
      }}
    >
      {contenido}
    </ReactMarkdown>
  );
};

export default MarkdownRendererText;
