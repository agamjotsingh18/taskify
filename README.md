<h1>Taskify</h1>
<p><strong>Taskify</strong> is a modern task management web application built with Next.js, React, Redux, and TypeScript. It allows users to manage their tasks in a Trello-like interface, providing functionalities like user authentication, task management, and real-time updates.</p>
<p>&nbsp;</p>
<h2>Features</h2>
<ul>
<li><strong>User Authentication:</strong> Secure login and registration with JWT tokens.</li>
<li><strong>Task Management:</strong> Create, update, and delete tasks. Organize tasks into customizable columns.</li>
<li><strong>Drag and Drop:</strong> Easily reorder tasks using drag-and-drop functionality.</li>
<li><strong>Real-time Updates:</strong> Tasks are updated in real-time across all clients.</li>
<li><strong>Responsive Design:</strong> Optimized for both desktop and mobile devices.</li>
</ul>
<h2>Live Demo</h2>
<p>Try out the live demo of Taskify: <a href="https://your-deployed-app-url.com" target="_new" rel="noreferrer">https://your-deployed-app-url.com</a></p>
<h2>Technologies Used</h2>
<ul>
<li>
<p><strong>Frontend:</strong></p>
<ul>
<li>Next.js</li>
<li>React</li>
<li>Redux</li>
<li>TypeScript</li>
<li>Material UI</li>
<li>Axios</li>
</ul>
</li>
<li>
<p><strong>Backend:</strong></p>
<ul>
<li>Express.js</li>
<li>Node.js</li>
<li>MongoDB</li>
<li>JWT Authentication</li>
</ul>
</li>
</ul>
<h2>Getting Started</h2>
<p>To get started with Taskify, follow these steps:</p>
<h3>Prerequisites</h3>
<ul>
<li>Node.js and npm (or Yarn) installed.</li>
<li>MongoDB server running locally or a cloud-based MongoDB service.</li>
</ul>
<h3>Installation</h3>
<ol>
<li>
<p><strong>Clone the repository:</strong></p>
<div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium">
<div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md">
<div class="flex items-center"></div>
</div>
<div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-bash">git clone https://github.com/your-username/taskify.git </code></div>
<div><code>cd taskify </code></code></div>
</div>
</li>
<li>
<p><strong>Install dependencies:</strong></p>
<div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium">
<div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md">
</div>
<div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-bash">npm install </code></div>
</div>
<p>Or with Yarn:</p>
<div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium">
<div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md">
</div>
<div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-bash">yarn install </code></div>
</div>
</li>
<li>
<p><strong>Create a <code>.env.local</code> file in the root directory and add your environment variables:</strong></p>
<div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium">
<div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"></div>
<div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-plaintext">MONGODB_URI=your-mongodb-uri JWT_SECRET=your-jwt-secret </code></div>
</div>
</li>
<li>
<p><strong>Run the development server:</strong></p>
<div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium">
<div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md">
</div>
<div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-bash">npm run dev </code></div>
</div>
<p>Or with Yarn:</p>
<div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium">
<div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"></div>
<div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-bash">yarn dev </code></div>
</div>
<p>The application will be available at <code>http://localhost:3000</code>.</p>
</li>
</ol>
<h3>Running Tests</h3>
<p>To run tests, use:</p>
<div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium">
<div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"></div>
<div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-bash">npm <span class="hljs-built_in">test</span> </code></div>
</div>
<p>Or with Yarn:</p>
<div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium">
<div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"></div>
<div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-bash">yarn <span class="hljs-built_in">test</span> </code></div>
</div>
<h3>Building for Production</h3>
<p>To build the application for production:</p>
<div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium">
<div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"></div>
<div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-bash">npm run build </code></div>
</div>
<p>Or with Yarn:</p>
<div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium">
<div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"></div>
<div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-bash">yarn build </code></div>
</div>
<br/>
<p>Then, start the server:</p>
<div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium">
<div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"></div>
<div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-bash">npm start </code></div>
</div>
<p>Or with Yarn:</p>
<div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium">
<div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"></div>
<div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-bash">yarn start </code></div>
</div>
<h2>Contributing</h2>
<p>We welcome contributions to Taskify! To contribute:</p>
<ol>
<li><strong>Fork the repository.</strong></li>
<li><strong>Create a feature branch (<code>git checkout -b feature/your-feature</code>).</strong></li>
<li><strong>Commit your changes (<code>git commit -am 'Add new feature'</code>).</strong></li>
<li><strong>Push to the branch (<code>git push origin feature/your-feature</code>).</strong></li>
<li><strong>Open a pull request.</strong></li>
</ol>
<p>Please make sure to follow the coding standards and write clear commit messages.</p>

<h2>Acknowledgments</h2>
<ul>
<li><strong>Next.js</strong>: Framework used for building the application.</li>
<li><strong>React</strong>: Frontend library for building user interfaces.</li>
<li><strong>Redux</strong>: State management library.</li>
<li><strong>Material UI</strong>: UI components and styles.</li>
<li><strong>MongoDB</strong>: Database used for storing data.</li>
</ul>
