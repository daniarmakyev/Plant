import React from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.leftContent}>
        <div className={styles.leftWords}>
          <Link to="/catalog">Каталог</Link>
          <Link to="/care-tips">Советы по уходу</Link>
          <Link to="/payment-delivery">Оплата и доставка</Link>
          <Link to="/contacts">Контакты</Link>
        </div>
        <div className={styles.logo}>plant</div>
        <span>© 2023 магазин цветов и растений PLANT</span>
      </div>

      <div className={styles.rightContent}>
        <div className={styles.nets}>
          <a href="https://www.instagram.com/accounts/login/">
            <svg
              width="58.000000"
              height="65.000000"
              viewBox="0 0 58 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs>
                <pattern
                  id="pattern_102_1350"
                  patternContentUnits="objectBoundingBox"
                  width="1.000000"
                  height="1.000000"
                >
                  <use
                    xlinkHref="#image102_135_0"
                    transform="matrix(0.011111,0,0,0.009915,0,0.053846)"
                  />
                </pattern>
                <image
                  id="image102_135_0"
                  width="90.000000"
                  height="90.000000"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
              <rect
                id="Instagram"
                width="58.000000"
                height="65.000000"
                fill="url(#pattern_102_1350)"
                fillOpacity="1.000000"
              />
            </svg>
          </a>
          <a href="https://ok.ru/?_erv=vwhxlyirbwpynedop">
            <svg
              width="58.000000"
              height="65.000000"
              viewBox="0 0 58 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs>
                <pattern
                  id="pattern_102_1360"
                  patternContentUnits="objectBoundingBox"
                  width="1.000000"
                  height="1.000000"
                >
                  <use
                    xlinkHref="#image102_136_0"
                    transform="matrix(0.011111,0,0,0.009915,0,0.053846)"
                  />
                </pattern>
                <image
                  id="image102_136_0"
                  width="90.000000"
                  height="90.000000"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABHNCSVQICAgIfAhkiAAABYRJREFUeJztnO+LVUUcxj9jymbZlq5giYtGUZKWFURBUZkhEguWu2JtQVSg/0VtQS96IfamwoogqCXEoIKgjBD6ZbER/lhMkqgsgnqh1W4uu7Y+vTjn0mW795wzc2fOPffufOC+2Tnf7zzzMHd2Zs7cgUgkEolEIpFIJBKJRCKR7sG4Bkq6ENgFDAPrgIt9iaoYfwPjwCiw1xgz7ZLEyWhJq4D3gRtc4juYI8CAMeYX20Bro9Oe/BXzz+QaR4BbbXv2AoeKdjF/TQbYAOy0DXIxetghptuw9sBl6JgAltjGdRmTxphLbAJcjJZtTDdijLHyzmXoiDgQjS6Jhe0WUICTwDvAAeBnoDaH7U8/W4CtwFVtURcKlcdxSdstdN0r6UhZ4kJ6XGtQaM5LGpF0gYO2hZKeTXMEJYS3cxsTkmlZ9OIMjcOSZkIK9eFlXiNCYr3iytD5eEihvnRmNSAULwTQ+koosbZaqrJgOQNcbYw57TOppKXA98BSn3mhcxcszxUxWdLNkp5IPzfmPW+MOQPs9qKwbAJ8C89LWplT52pJnzSIPSipPye2XwFmIX5dbSzcN1/m1LdC0qmM+B8kLc/JMeZbtK1vVRg6DuWUj5CsAJuxBngqJ8cXFnqCUAWjf21WIMkAOwrkeNC1jrKogtG/Z5RdRrEZw3JJvRnlv9lJ8k8VjM4yaAI4VyDHNMnb6mZcaqUoAFUwuumMwxjzD/BxgRwfGWNmXeooiyoYvS6n/ElgJqN8On2mlTqqh+9pkqSzki7KqXObpIkGsX9K2poTu0TSlG/Rtr5VZQm+wxizL6feK4DHgFsAAWPAa8aYzH90kh4iOWXkFdsleFWMPgFcn47J3lCyp30UuM5nXujcvY61JL3VNzsJYLILVenRAFPAXcaYMR/JJN0EfAZkjv+udGqPBlgMvC1pTauJJF0JvEcgk12oktGQ7Gl8LWmjawJJt5Psn6zypsoDVTMaoA/4QNJuSX1FgyT1SdoDHARWBFPnSJXG6Eb8AbwOvAt8OndWImkhcCfJuY5HKXGp3YnTu1ngLeBzkk2kR2g8UzhLcoCmNm++nGSoWdzg2ePAG2nMHcADgPXxhSxsjbbG8wJrWtKmOfmNpO2STjjk+1bSkJLt1fqcA/J8/CCoyQGMbvrmW9ICSRslvSrpZEaO75S87b5bUtP/OZJe9Cnc1rd2Dx1bjDEfFqx3GclQsSz902ngVPoCtkj8fSS/u/GC7dDR7kOOhcfN9C15K8cRvI7RtrR7eretxLoGS6yrdXyOc5LOSXq4BM33p3V5I7TmUOc69klaHUDrSkl7Jc36Fu1bayPxoZiS9JKkazxovDbN5X3Dv4atpnbPOppxCNgPHDDGjBcJkLQe2AxsB24LqA3ovAVLHnkHY+p1jZQpLKTHtQaVRWGT67SVZnYIb+c2pgysTa7TV4rZPj1t1pDQOJtcpzG42T68zGtESFo2uU5nULN96cxqQCjyDsHU6h+SNFTw2adDiW3NxWLiQ1CoJysxeSb9FDX7mRCCW3OxmHDfFNpR038m17Axe79v0a25WEy0bzYVqHOuyTUKmS1ps2/Rtr61e/cO4KeswtTIUWBRg+JFwGgBs390k+aPKhjd9NogSYM0N7lGzeysbdDOu5rI91dQ0jFJPQ3qGZTde76ZRmZL6pE07lt0JxotSd9IukdSr6S1kp6X29bmrKQ9aY5eSZvS3N6x9a2qu3eVp5PP3nU10eiScDF60ruKzuMv2wAXo487xHQb1h64GP2mQ0y3Ye2By6yjh+QS2A22sV3CYZJLYLN+kvc/rHt0esvsAMmts/ONwyTXGluZDK1d1N1D8mOcYWA93Xtf6SRwjGQr4GUXkyORSCQSiUQikUgkEolEuo1/AS+RD3BVmdMcAAAAAElFTkSuQmCC"
                />
              </defs>
              <rect
                id="Odnoklassniki"
                width="58.000000"
                height="65.000000"
                fill="url(#pattern_102_1360)"
                fillOpacity="1.000000"
              />
            </svg>
          </a>
          <a href="https://vk.com/">
            <svg
              width="58.000000"
              height="65.000000"
              viewBox="0 0 58 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs>
                <pattern
                  id="pattern_102_1370"
                  patternContentUnits="objectBoundingBox"
                  width="1.000000"
                  height="1.000000"
                >
                  <use
                    xlinkHref="#image102_137_0"
                    transform="matrix(0.011111,0,0,0.009915,0,0.053846)"
                  />
                </pattern>
                <image
                  id="image102_137_0"
                  width="90.000000"
                  height="90.000000"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABHNCSVQICAgIfAhkiAAABGRJREFUeJztnE+IHEUUh78XE2PWXTAaDcagEkGMhgQE8ZAcBK97EPHvgrnpCokaNCBe9KKLFzEHhfgH8WAUCRgvGg/eVFBB2KCr4kkhLsoiirOrxjX5eehZGYeeqa6antqZ2feddrvrVb3+uqamp7u6wHEcx3Ecx3Ecx3EcZ3Sw1EBJFwDTwBRwA3BhXUkNGEvAV8CbwEtmdialkiTRkrYD7wG7U+KHmFPApJmdjg2MFt3syZ+x9iSvcAq4ObZnr0toaJq1KxlgD/BAbFCK6KmEmFEj2kHK0NEAxmPjRoxFM5uICUgRrdiYUcTMotylDB1OAi46Ey46Ey46Ey46Ey46Ey46Ey46Ey46Ey46Ey46Ey46Ey46Ey46E4Ms+jtgP3AdcDFwUfPW5Ibm/7uBw8Bfq5ZhBDnuR98GfAKcLdk3ATwL3Nu2/Sywz8w+rZDPEeCRLkUOAyc67FsCzgGTwGuhtlqJvR8djeK5JlDfhKTfOsS+VSGfB7u0PVvxmLbHHlRVXyvkGDoOdttpZg0696Z7JO3toe0XKpa7vYc2+kPsmZfUkHRJoM5tkv7oEH8oEHugQ9wPks6vcDxjzbJRxHrL0aPHgce6FTCzeeBoh92bA/V3kjljZn8HYgGeAK6sUC4vsWe+SUPSlkC9WyUtlsTOBOIeL4n5XtV6842SzqQcUKy3XJd34xTf/h0xs5+Bp0t2hXLcULLtUKg3SxoD3qDzJ6JWcl5HH5B0WaDMcxQTClv5JxDTfpl13MzerZDPEWBnhXK1kFP0OPBUtwJmtkwx3Wq5ZXNoQuG5lr8XgIdCiUjaD9wfKreqpIxnLSxLCvYiSQ+3xNwSKHt3s9yfqnApKGmXpKUej6P/k4h6TVDSyYrtTEt6XdL6QLlNko5K2lehzjFJ39RwDEMhWpLu7Hui5bk/U1P+0aJXa+7dPLDTzH6voa7KSJoDrq+jrmGZe7eN4gojN++sQptp1PXRa5J1CJFkkl6sI/EcydbJgqQr+p70//NfJ+mVXhPPkWjdfCEp6xtdqqFn50iyH5yQlPx9IekmSc9L2hERY5JeTU04NdfK1OO1lGOqcCOoJJ/zJJ1u1vGTpD0RseslfZCSbGye0dSitDMfKnDvuiSfvW11LEi6NiJ+s6T52ERjvQ3aw9lbgTlJd0TEtA8XW4CTki6vEmxmvxK4X14HgyYaYCtwXNLnku5S8QJpN64u2bYD+FiB55UtvB+TYArD8FZWA/gImAO+bf6/wqXAkxQnp4xfgBngbTP7UdImoP3EXQU8CtwXk1TsL8NhED2QDMtP8DWHi86Ei86Ei86Ei86Ei86Ei86Ei86Ei86Ei86Ei86Ei86Ei86Ei85EiujF2rMYPqJnWKWI/johZtSIdpAi+lhCzKgR7SDlCctGikVgKz/WHzFmKRaBrfIi0n9E9+jmKrOTFKvOrjVmKZY1jpIMvS3UvZHiNYgpYBeju17pIvAlxULdL6dIdhzHcRzHcRzHcRzHGTX+BRW7Qm4O8vShAAAAAElFTkSuQmCC"
                />
              </defs>
              <rect
                id="VK com"
                width="58.000000"
                height="65.000000"
                fill="url(#pattern_102_1370)"
                fillOpacity="1.000000"
              />
            </svg>
          </a>
        </div>
        <div className={styles.intBut}>
          <input type="email" placeholder="   e-mail" />
          <button>Подписаться</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
