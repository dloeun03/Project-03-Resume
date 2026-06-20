export default function Home() {
return ( <main className="max-w-4xl mx-auto px-8 py-10 bg-white min-h-screen"> <header className="text-center border-b border-gray-300 pb-6"> <h1 className="text-4xl font-bold text-gray-900">
Daylan Loeun </h1>

```
    <p className="text-gray-600 mt-2">
      Pinellas Park, Florida
    </p>

    <p className="text-gray-600">
      daylanloeun@gmail.com | 727-608-6203
    </p>
  </header>

  <section className="mt-8">
    <h2 className="text-2xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
      Professional Summary
    </h2>

    <p className="mt-4 text-gray-700 leading-relaxed">
      Motivated and detail-oriented Business Administration student
      with strong analytical, communication, and organizational
      skills. Experienced in managing multiple priorities,
      conducting research, and working collaboratively in fast-paced
      environments. Seeking an opportunity to contribute to a law
      firm while developing knowledge of legal procedures, client
      relations, and case management. Committed to professionalism,
      confidentiality, and delivering high-quality work.
    </p>
  </section>

  <section className="mt-8">
    <h2 className="text-2xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
      Education
    </h2>

    <div className="mt-4">
      <h3 className="text-lg font-medium text-grey-900">
        University of South Florida
      </h3>

      <p className="text-gray-800">
        Major: Business Analytics and Data Systems
      </p>
    </div>
  </section>

  <section className="mt-8">
    <h2 className="text-2xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
      Work Experience
    </h2>

    <div className="mt-4">
      <h3 className="text-lg font-medium text-grey-900">
        Walgreens
      </h3>

      <p className="text-gray-800">
        Shift Lead | October 2022 – Present
      </p>

      <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-2">
        <li>
          Supervised daily store operations and provided leadership
          to team members during assigned shifts.
        </li>

        <li>
          Assisted customers with purchases, returns, and product
          inquiries while delivering excellent customer service.
        </li>

        <li>
          Managed cash handling, register operations, deposits, and
          end-of-day closing procedures.
        </li>

        <li>
          Trained and supported new employees on company policies,
          procedures, and customer service standards.
        </li>

        <li>
          Helped maintain inventory accuracy by stocking shelves,
          monitoring product availability, and organizing
          merchandise displays.
        </li>
      </ul>
    </div>
  </section>

  <section className="mt-8">
    <h2 className="text-2xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
      Technical Projects
    </h2>

    <div className="mt-4 space-y-4">
      <div>
        <h3 className="font-medium">
          Product Dashboard Application
        </h3>

        <p className="text-gray-700">
          Developed a JavaScript dashboard that retrieves and
          displays product information from an external API using
          Fetch API, async/await, and dynamic DOM manipulation.
        </p>
      </div>

      <div>
        <h3 className="font-medium">
          Product Pricing Assistant
        </h3>

        <p className="text-gray-700">
          Created a business-focused JavaScript application that
          calculates pricing, discounts, taxes, profit margins,
          and break-even analysis.
        </p>
      </div>

      <div>
        <h3 className="font-medium">
          Retail Discount Engine
        </h3>

        <p className="text-gray-700">
          Built a retail pricing system using JavaScript conditionals
          to automate discount calculations and customer purchase
          scenarios.
        </p>
      </div>

      <div>
        <h3 className="font-medium">
          Customer Records Tracker
        </h3>

        <p className="text-gray-700">
          Designed a customer management program utilizing arrays,
          objects, and data-processing techniques to organize and
          manage customer information.
        </p>
      </div>

      <div>
        <h3 className="font-medium">
          Tableau Business Analytics Projects
        </h3>

        <p className="text-gray-700">
          Created dashboards, forecasting models, trend analysis,
          and executive summaries using Tableau and business data.
        </p>
      </div>
    </div>
  </section>

  <section className="mt-8">
    <h2 className="text-2xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
      Skills
    </h2>

    <div className="mt-4 grid grid-cols-2 gap-4 text-gray-700">
      <ul className="list-disc ml-6 space-y-1">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>Next.js</li>
        <li>Tailwind CSS</li>
        <li>GitHub</li>
      </ul>

      <ul className="list-disc ml-6 space-y-1">
        <li>Microsoft Excel</li>
        <li>Microsoft Word</li>
        <li>Tableau</li>
        <li>Data Analysis</li>
        <li>API Integration</li>
        <li>VS Code</li>
      </ul>
    </div>
  </section>

  <section className="mt-8">
    <h2 className="text-2xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
      Professional Strengths
    </h2>

    <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
      <li>
        Attention to Detail - Strong ability to review documents,
        identify errors, and ensure accuracy in written and
        administrative work.
      </li>

      <li>
        Organization and Time Management - Skilled at managing
        multiple tasks, meeting deadlines, and maintaining organized
        records in fast-paced environments.
      </li>

      <li>
        Professional Communication - Able to communicate clearly and
        professionally with clients, colleagues, and supervisors
        while maintaining confidentiality and professionalism.
      </li>
    </ul>
  </section>
</main>
);
}
