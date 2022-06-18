import React from 'react';

const WebDocumentations: React.FC = () => {
  return (
    <React.Fragment>
      <article className="min-h-screen flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          <h3 className="text-xl font-bold">C Programming Documentation</h3>
          <p className="font-noraml text-lg leading-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            veniam? Doloribus magnam maiores repellat perspiciatis reiciendis,
            sequi omnis quaerat incidunt natus! Commodi minus provident
            mollitia, tempore odit veniam magni rem?
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-xl font-bold">
            Frontend Development Guide Documentation
          </h3>
          <p className="font-noraml text-lg leading-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            veniam? Doloribus magnam maiores repellat perspiciatis reiciendis,
            sequi omnis quaerat incidunt natus! Commodi minus provident
            mollitia, tempore odit veniam magni rem?
          </p>
        </div>
      </article>
      <article>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aperiam
        minus fuga dicta rem optio sapiente soluta ipsam dolore iusto earum
        autem, repudiandae, quisquam debitis adipisci? Modi illum neque ea!
      </article>
    </React.Fragment>
  );
};

export default WebDocumentations;
