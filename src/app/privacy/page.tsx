import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";

const privacy = () => {
  return (
    <div>
      <Wrapper>
        <HeaderOne />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>
              <div className="container my-5">
                <h1 className="mb-4">Privacy Policy</h1>

                <p className="lead">
                  Operant Biomedical Research Federation (OBRF) is committed to
                  protecting your privacy. This Privacy Policy outlines how we
                  handle your personal information to protect your privacy.
                </p>

                <h2>Information Collection</h2>
                <p>
                  We collect personal information when you register with us, use
                  our services, or visit our website. The information collected
                  may include your name, email address, phone number, and other
                  relevant data necessary for providing our services.
                </p>

                <h2>Use of Information</h2>
                <p>We use the information collected to:</p>
                <ul>
                  <li>Provide, maintain, and improve our services</li>
                  <li>
                    Communicate with you, including responding to your comments,
                    questions, and requests
                  </li>
                  <li>
                    Send you technical notices, updates, security alerts, and
                    support messages
                  </li>
                  <li>
                    Analyze trends and usage to improve our services and website
                  </li>
                </ul>

                <h2>Information Sharing</h2>
                <p>
                  We do not share your personal information with third parties
                  except in the following cases:
                </p>
                <ul>
                  <li>With your consent</li>
                  <li>
                    For external processing with trusted partners who comply
                    with our Privacy Policy and security measures
                  </li>
                  <li>To comply with laws, regulations, or legal requests</li>
                  <li>
                    To protect the rights, property, and safety of OBRF, our
                    users, or the public
                  </li>
                </ul>

                <h2>Data Security</h2>
                <p>
                  We implement security measures to protect your personal
                  information against unauthorized access, alteration,
                  disclosure, or destruction. These measures include internal
                  reviews of our data collection, storage, and processing
                  practices and security measures, as well as physical security
                  measures to guard against unauthorized access to systems where
                  we store personal data.
                </p>

                <h2>Cookies</h2>
                <p>
                  Our website uses cookies to collect information and enhance
                  your user experience. Cookies are small data files stored on
                  your device. You can instruct your browser to refuse all
                  cookies or to indicate when a cookie is being sent. However,
                  if you do not accept cookies, you may not be able to use some
                  portions of our website.
                </p>

                <h2>Third-Party Links</h2>
                <p>
                  Our website may contain links to other sites that are not
                  operated by us. If you click on a third-party link, you will
                  be directed to that third party's site. We strongly advise you
                  to review the Privacy Policy of every site you visit. We have
                  no control over and assume no responsibility for the content,
                  privacy policies, or practices of any third-party sites or
                  services.
                </p>

                <h2>Children's Privacy</h2>
                <p>
                  Our services are not directed to individuals under the age of
                  13. We do not knowingly collect personal information from
                  children under 13. If we become aware that a child under 13
                  has provided us with personal information, we will take steps
                  to delete such information from our servers.
                </p>

                <h2>Changes to This Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page. You are advised to review this Privacy Policy
                  periodically for any changes. Changes to this Privacy Policy
                  are effective when they are posted on this page.
                </p>

                <h2>Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please
                  contact us:
                </p>
                <ul>
                  <li>By email: support@obrf.org</li>
                  <li>
                    By visiting this page on our website:{" "}
                    <a href="https://www.obrf.org/contact">
                      https://www.obrf.org/contact
                    </a>
                  </li>
                </ul>
              </div>
            </main>
            <FooterOne />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default privacy;
