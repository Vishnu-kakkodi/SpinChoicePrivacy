import React from "react";
import {
  ShieldCheck,
  User,
  Lock,
  Share2,
  Settings,
  Clock,
  Users,
  RefreshCw,
  PhoneCall,
  RotateCcw,
} from "lucide-react";

const PrivacyAndPolicy = () => {
  const sections = [
    {
      icon: <User size={28} color="#2E7D32" />,
      title: "1. Information We Collect",
      content: (
        <>
          <p>
            <strong>Spin Wheel Picker</strong> is designed to be simple and
            privacy-friendly.
          </p>
          <ul className="ps-3">
            <li>
              We <strong>do not create accounts</strong> and do not require you
              to sign in.
            </li>
            <li>
              We <strong>do not collect</strong> personal information such as
              your name, email, phone number, or address.
            </li>
            <li>
              The names you type into the wheel are used only for that
              session on your device.
            </li>
            <li>
              These names are not uploaded to any server and are not linked to
              your identity.
            </li>
          </ul>
        </>
      ),
    },
    {
      icon: <Settings size={28} color="#2E7D32" />,
      title: "2. How We Use the Information You Enter",
      content: (
        <ul className="ps-3">
          <li>
            Names or items you enter are used <strong>only to spin the wheel</strong> and
            randomly pick a result.
          </li>
          <li>
            All processing happens locally on your device while you use the app.
          </li>
          <li>
            We do not build any profile about you and do not track your usage
            across apps or websites.
          </li>
        </ul>
      ),
    },
    {
      icon: <Lock size={28} color="#2E7D32" />,
      title: "3. How We Protect Your Data",
      content: (
        <ul className="ps-3">
          <li>
            Since we do not store personal data on our servers, the risk of
            data exposure is minimized.
          </li>
          <li>
            Any temporary data stays on your device and is managed by your
            operating system (Android / iOS).
          </li>
          <li>
            If you uninstall the app, all local data related to the app is
            removed by the system.
          </li>
        </ul>
      ),
    },
    {
      icon: <Share2 size={28} color="#2E7D32" />,
      title: "4. Sharing of Information",
      content: (
        <>
          <p>
            We do <strong>not sell</strong>, rent, or trade any personal
            information because we do not collect it.
          </p>
          <ul className="ps-3">
            <li>
              We do not share your data with advertisers or third-party
              marketing companies.
            </li>
            <li>
              We do not send your spin results, names, or choices to any remote
              server.
            </li>
          </ul>
        </>
      ),
    },
    {
      icon: <ShieldCheck size={28} color="#2E7D32" />,
      title: "5. Your Rights & Control",
      content: (
        <>
          <ul className="ps-3">
            <li>
              You are free to stop using the app at any time. No account
              deletion request is needed because no account is created.
            </li>
            <li>
              You can clear the names/items you entered at any time within the
              app.
            </li>
            <li>
              You can uninstall the app at any time, and your device will remove
              related local data.
            </li>
          </ul>
          <p>
            If you have any questions, you can email us at:{" "}
            <a
              href="mailto:pokkanoorvishnu@gmail.com"
              className="text-success fw-semibold"
            >
              pokkanoorvishnu@gmail.com
            </a>{" "}
          </p>
        </>
      ),
    },
    {
      icon: <Clock size={28} color="#2E7D32" />,
      title: "6. Data Retention",
      content: (
        <p>
          Since we do not store your personal data on our servers, there is no
          long-term data retention. Any names or items you type may be stored
          temporarily on your device and can be cleared by you or removed when
          the app is uninstalled.
        </p>
      ),
    },
    {
      icon: <Users size={28} color="#2E7D32" />,
      title: "7. Children&apos;s Privacy",
      content: (
        <p>
          <strong>Spin Wheel Picker</strong> can be used by all ages as a simple
          random picker tool. We do not intentionally collect personal
          information from children or adults. Parents and guardians are
          encouraged to supervise device use for younger children.
        </p>
      ),
    },
    {
      icon: <RotateCcw size={28} color="#2E7D32" />,
      title: "8. No Real Money, No Gambling",
      content: (
        <ul className="ps-3">
          <li>
            The app is intended only for <strong>fun and utility</strong>
            &nbsp;(choosing names, tasks, options, etc.).
          </li>
          <li>
            There are <strong>no real-money games</strong>, betting,
            or gambling features in this app.
          </li>
          <li>
            We do not offer payouts, prizes, or financial rewards of any kind.
          </li>
        </ul>
      ),
    },
    {
      icon: <RefreshCw size={28} color="#2E7D32" />,
      title: "9. Changes to This Policy",
      content: (
        <p>
          We may update this Privacy Policy from time to time to improve clarity
          or reflect changes in the app. If you continue using the app after
          updates, it means you accept the latest version of this policy.
        </p>
      ),
    },
    {
      icon: <PhoneCall size={28} color="#2E7D32" />,
      title: "10. Contact Us",
      content: (
        <p>
          For any questions or concerns about this Privacy Policy, please
          contact us at:{" "}
          <a
            href="mailto:pokkanoorvishnu@gmail.com"
            className="text-success fw-semibold"
          >
            pokkanoorvishnu@gmail.com
          </a>
          .
        </p>
      ),
    },
  ];

  const today = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="pb-5" style={{ backgroundColor: "#F7FFF8" }}>
      {/* HEADER */}
      <div
        className="text-center py-5 mb-4"
        style={{
          background: "linear-gradient(135deg, #2E7D32, #66BB6A)",
          color: "#fff",
          borderBottomLeftRadius: "40px",
          borderBottomRightRadius: "40px",
        }}
      >
        <h1 className="fw-bold">Spin Wheel Picker - Privacy Policy</h1>
        <p className="mt-2" style={{ opacity: 0.9 }}>
          Simple, fun, and privacy-friendly. We don&apos;t collect your personal
          data.
        </p>
        <p className="mt-3 fw-semibold" style={{ fontSize: "15px", opacity: 0.9 }}>
          📅 Last Updated: {today}
        </p>
      </div>

      {/* SECTIONS */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-11 col-12">
            {sections.map((sec, i) => (
              <div
                key={i}
                className="p-4 mb-4 shadow-sm animate-section"
                style={{
                  background: "#ffffff",
                  borderRadius: "12px",
                  borderLeft: "6px solid #2E7D32",
                }}
              >
                <div className="d-flex align-items-center gap-3 mb-3">
                  {sec.icon}
                  <h4
                    className="fw-semibold m-0"
                    style={{ color: "#1B5E20" }}
                  >
                    {sec.title}
                  </h4>
                </div>
                <div style={{ color: "#2b2b2b" }}>{sec.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ANIMATION CSS */}
      <style>{`
        .animate-section {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default PrivacyAndPolicy;
