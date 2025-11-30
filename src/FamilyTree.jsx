import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const FamilyTree = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const Person = ({ person, id, children, depth = 0 }) => {
    const hasChildren = children && children.length > 0;
    const isExpanded = expanded[id];

    const colors = [
      'bg-gradient-to-r from-rose-100 to-pink-100 border-rose-300 hover:from-rose-200 hover:to-pink-200',
      'bg-gradient-to-r from-amber-100 to-orange-100 border-amber-300 hover:from-amber-200 hover:to-orange-200',
      'bg-gradient-to-r from-emerald-100 to-teal-100 border-emerald-300 hover:from-emerald-200 hover:to-teal-200',
      'bg-gradient-to-r from-blue-100 to-indigo-100 border-blue-300 hover:from-blue-200 hover:to-indigo-200',
      'bg-gradient-to-r from-purple-100 to-fuchsia-100 border-purple-300 hover:from-purple-200 hover:to-fuchsia-200',
      'bg-gradient-to-r from-yellow-100 to-amber-100 border-yellow-300 hover:from-yellow-200 hover:to-amber-200',
    ];

    const colorClass = colors[depth % colors.length];

    return (
      <div className="my-2">
        <div
          className={`flex items-start gap-3 p-3 sm:p-4 text-[15px] sm:text-base ${colorClass} border-2 rounded-xl transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md`}
          onClick={() => hasChildren && toggleExpand(id)}
        >
          {hasChildren ? (
            isExpanded ? <ChevronDown size={20} className="mt-0.5 flex-shrink-0 text-gray-700" /> : <ChevronRight size={20} className="mt-0.5 flex-shrink-0 text-gray-700" />
          ) : (
            <div className="w-5 flex-shrink-0" />
          )}
          <div className="flex-1 min-w-0">
            <div className="font-bold text-gray-800 text-base break-words">{person.name}</div>
            {person.dob && <div className="text-sm text-gray-700 mt-1 break-words">🎂 Born: {person.dob}</div>}
            {person.spouse && <div className="text-sm text-gray-700 mt-0.5 break-words">💑 Married: {person.spouse}</div>}
          </div>
        </div>
        {hasChildren && isExpanded && (
          <div className="border-l-4 border-gray-400 ml-6 mt-2">
            {children.map((child, idx) => (
              <div key={idx} className="ml-3">
                <Person person={child.person} id={child.id} children={child.children} depth={depth + 1} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };


  // Build the complete tree structure
  const nooraan = {
    person: { name: "Nooraan Ally", dob: "9 July 1965", spouse: "Hussein Ebrahim Amanjee (22 Sep 1962)" },
    id: "nooraan",
    children: [
      {
        person: { name: "Faheemah Amanjee", dob: "26 Oct 1986", spouse: "Farhaan Cassim (18 Oct 1986)" },
        id: "faheemah",
        children: [
          { person: { name: "Sulaimaan Cassim", dob: "2 Feb 2022" }, id: "sulaimaan", children: [] }
        ]
      },
      {
        person: { name: "Nabeelah Amanjee", dob: "6 Feb 1992", spouse: "Yusuf Hassim (30 Mar 1991)" },
        id: "nabeelah",
        children: [
          { person: { name: "Abdullah Hassim", dob: "22 April 2024" }, id: "abdullah", children: [] }
        ]
      },
      {
        person: { name: "Muhammad Hussein Amanjee", dob: "6 June 1995", spouse: "Romaana Boda (27 Sep 1995)" },
        id: "muhammad-hussein",
        children: [
          { person: { name: "Aliyya Amanjee", dob: "9 Oct 2017" }, id: "aliyya", children: [] },
          { person: { name: "Yusayrah Amanjee", dob: "14 Sep 2022" }, id: "yusayrah", children: [] },
          { person: { name: "Hannah Amanjee", dob: "23 Oct 2023" }, id: "hannah", children: [] }
        ]
      }
    ]
  };

  const shouneez = {
    person: { name: "Shouneez Ally", dob: "31 May 1968", spouse: "Nizaam Mohamed Joosub (27 Feb 1963)" },
    id: "shouneez",
    children: [
      {
        person: { name: "Muhammed Zaakir Mohamed Joosub", dob: "22 Dec 1986", spouse: "Ishrat Mangroo (17 Aug 1987)" },
        id: "zaakir",
        children: [
          { person: { name: "Mahdiya Mohamed Joosub", dob: "24 Oct 2011" }, id: "mahdiya", children: [] },
          { person: { name: "Abdul-Aziz Mohamed Joosub", dob: "20 Jan 2013" }, id: "abdul-aziz", children: [] },
          { person: { name: "Huda Mohamed Joosub", dob: "23 Jan 2025" }, id: "huda", children: [] }
        ]
      },
      {
        person: { name: "Faranaaz Mohamed Joosub", dob: "17 July 1992", spouse: "Muhammed Zaheer Chothia (11 Aug 1992)" },
        id: "faranaaz",
        children: [
          { person: { name: "Khadeejah Chothia", dob: "22 June 2020" }, id: "khadeejah", children: [] },
          { person: { name: "Muhammed Chothia", dob: "8 Mar 2022" }, id: "muhammed-chothia", children: [] }
        ]
      },
      {
        person: { name: "Azraa Mohamed Joosub", dob: "17 Jan 1999", spouse: "Junaid Seedat (19 Oct 1995)" },
        id: "azraa",
        children: []
      },
      {
        person: { name: "Muaaz Mohamed Joosub", dob: "3 Sep 2005" },
        id: "muaaz",
        children: []
      }
    ]
  };

  const mirzah = {
    person: { name: "Mirzah Ally", dob: "3 Nov 1974", spouse: "Aneesah de Saldanha (3 Dec 1974)" },
    id: "mirzah",
    children: [
      { person: { name: "Niyaaz Ally", dob: "30 Apr 2007" }, id: "niyaaz", children: [] },
      { person: { name: "Ilyaas Ally", dob: "5 Aug 2009" }, id: "ilyaas", children: [] },
      { person: { name: "Yasirah Ally", dob: "24 Aug 2011" }, id: "yasirah", children: [] }
    ]
  };

  const abdulSamat = {
    person: { name: "Abdul Samat Ally", dob: "6 Dec 1938", spouse: "Firdose Hackenburg (7 Aug 1943)" },
    id: "abdul-samat",
    children: [nooraan, shouneez, mirzah]
  };

  const nadia = {
    person: { name: "Nadia Dindar", dob: "12 June 1967", spouse: "Yusuf Akoodie (10 Nov 1965)" },
    id: "nadia",
    children: [
      {
        person: { name: "Muhammed Akoodie", dob: "26 Feb 1990" },
        id: "muhammed-akoodie",
        children: [
          { person: { name: "Liyana", dob: "14 Oct 2020" }, id: "liyana", children: [] }
        ]
      },
      {
        person: { name: "Laila Akoodie", dob: "31 Jan 1992" },
        id: "laila",
        children: []
      },
      {
        person: { name: "Safwaan Akoodie", dob: "22 Jan 1997", spouse: "Aqeelah Desai (16 Apr 1999)" },
        id: "safwaan",
        children: [
          { person: { name: "Zahra Akoodie", dob: "26 Feb 2023" }, id: "zahra", children: [] }
        ]
      },
      {
        person: { name: "Maseeha Akoodie", dob: "12 Nov 2001" },
        id: "maseeha",
        children: []
      },
      {
        person: { name: "Humaira Akoodie", dob: "4 June 2003" },
        id: "humaira",
        children: []
      }
    ]
  };

  const anesa = {
    person: { name: "Anesa Dindar", dob: "15 Sep 1970" },
    id: "anesa",
    children: [
      { person: { name: "Taahir Chagan", dob: "14 Aug 1990" }, id: "taahir", children: [] }
    ]
  };

  const nazlee = {
    person: { name: "Nazlee Dindar", dob: "25 May 1974", spouse: "Ismail Mahomed Rashid Ally (25 Aug 1973)" },
    id: "nazlee",
    children: [
      { person: { name: "Atiyya Ally", dob: "1 Sep 2001" }, id: "atiyya", children: [] },
      { person: { name: "Muhammad Uwais Ally", dob: "30 Oct 2004" }, id: "uwais", children: [] },
      { person: { name: "Talha Ally", dob: "15 Jan 2008" }, id: "talha", children: [] }
    ]
  };

  const farida = {
    person: { name: "Farida Ally", dob: "18 Apr 1942", spouse: "Amien Dindar (3 June 1942)" },
    id: "farida",
    children: [nadia, anesa, nazlee]
  };

  const shamiel = {
    person: { name: "Muhammad Shamiel Galant", dob: "12 Apr 1974", spouse: "Ayesha" },
    id: "shamiel",
    children: [
      { person: { name: "Sama Galant", dob: "9 Feb 2006" }, id: "sama", children: [] },
      { person: { name: "Fayad Galant", dob: "29 Oct 2008" }, id: "fayad", children: [] }
    ]
  };

  const muneeb = {
    person: { name: "Muneeb Galant", dob: "4 Dec 1976", spouse: "Tania" },
    id: "muneeb",
    children: [
      { person: { name: "Darian Galant", dob: "26 Nov 2007" }, id: "darian", children: [] },
      { person: { name: "Kayla Galant", dob: "28 July 2010" }, id: "kayla", children: [] },
      { person: { name: "Millah Galant", dob: "2 Feb 2023" }, id: "millah", children: [] },
      { person: { name: "Kiyaan Galant", dob: "11 Oct 2024" }, id: "kiyaan", children: [] }
    ]
  };

  const tasneem = {
    person: { name: "Tasneem Galant", dob: "17 Sep 1979", spouse: "Majdie" },
    id: "tasneem",
    children: [
      { person: { name: "Daleel", dob: "16 Aug 2011" }, id: "daleel", children: [] },
      { person: { name: "Zaina", dob: "13 Sep 2013" }, id: "zaina", children: [] }
    ]
  };

  const khairunnisa = {
    person: { name: "Khairunnisa Ally", dob: "5 Sep 1943", spouse: "Abdullah Galant (19 July 1939)" },
    id: "khairunnisa",
    children: [shamiel, muneeb, tasneem]
  };

  const zaid = {
    person: { name: "Zaid Dindar", dob: "8 July 1976" },
    id: "zaid",
    children: [
      { person: { name: "Azra Dindar", dob: "14 Feb 2001" }, id: "azra", children: [] },
      { person: { name: "Imaan Dindar", dob: "18 Mar 2003" }, id: "imaan", children: [] },
      { person: { name: "Yaseen Dindar", dob: "8 Mar 2011" }, id: "yaseen", children: [] }
    ]
  };

  const zaheer = {
    person: { name: "Zaheer Dindar", dob: "24 Mar 1981", spouse: "Hannah Burbach (20 Dec 1987)" },
    id: "zaheer",
    children: []
  };

  const fatima = {
    person: { name: "Fatima Ally", dob: "8 Oct 1945", spouse: "Ismail Dindar (27 Oct 1943)" },
    id: "fatima",
    children: [zaid, zaheer]
  };

  const farhana = {
    person: { name: "Farhana Said", dob: "29 Apr 1974", spouse: "Nazeer Abdulla (27 Nov 1982)" },
    id: "farhana",
    children: [
      { person: { name: "Sa'ad Mohamed Badat", dob: "25 June 2000" }, id: "saad", children: [] },
      { person: { name: "Ameera Mohamed Badat", dob: "13 Aug 2003" }, id: "ameera", children: [] },
      { person: { name: "Talha Ebrahim Mohamed Badat", dob: "4 Oct 2005" }, id: "talha-badat", children: [] },
      { person: { name: "Saifudeen Essam Rashwan", dob: "8 Nov 2012" }, id: "saifudeen", children: [] },
      { person: { name: "Muhammad Abdulla", dob: "11 Feb 2018" }, id: "muhammad-abdulla", children: [] }
    ]
  };

  const zunaid = {
    person: { name: "Zunaid Said", dob: "5 Apr 1978", spouse: "Najeebah Bhamjee (19 Apr 1978)" },
    id: "zunaid",
    children: [
      { 
        person: { name: "Muzzammil Said", dob: "28 July 2002", spouse: "Razaan Docrat (3 July 2002)" }, 
        id: "muzzammil", 
        children: [] 
      },
      { person: { name: "Zubair Said", dob: "23 June 2005" }, id: "zubair", children: [] },
      { person: { name: "Mariam Said", dob: "31 May 2010" }, id: "mariam-said", children: [] }
    ]
  };

  const muneera = {
    person: { name: "Muneera Said", dob: "3 May 1983", spouse: "Mohammed Aslam Patel (3 Jan 1980)" },
    id: "muneera",
    children: [
      { person: { name: "Muhammed Hamza Patel", dob: "26 Apr 2007" }, id: "hamza", children: [] },
      { person: { name: "Nusaybah Patel", dob: "19 Apr 2010" }, id: "nusaybah", children: [] },
      { person: { name: "Muhammed A'amir Patel", dob: "10 Aug 2013" }, id: "aamir", children: [] }
    ]
  };

  const zaiboonisa = {
    person: { name: "Zaiboonisa Ally", dob: "13 Apr 1947", spouse: "Omer Farouk Said (30 May 1949)" },
    id: "zaiboonisa",
    children: [farhana, zunaid, muneera]
  };

  const fadia = {
    person: { name: "Fadia Bhayat", dob: "9 Mar 1976" },
    id: "fadia",
    children: [
      { person: { name: "Aaliah Kathrada", dob: "30 Apr 2001" }, id: "aaliah", children: [] }
    ]
  };

  const zulweena = {
    person: { name: "Zulweena Bhayat", dob: "13 May 1981", spouse: "Mogamad Saaid Cassiem (2 May 1976)" },
    id: "zulweena",
    children: [
      { person: { name: "Ilhaam Cassiem", dob: "16 Aug 2003" }, id: "ilhaam", children: [] },
      { person: { name: "Amaal Cassiem", dob: "15 Aug 2007" }, id: "amaal", children: [] },
      { person: { name: "Imaan Cassiem", dob: "20 Sep 2013" }, id: "imaan-cassiem", children: [] }
    ]
  };

  const riyadh = {
    person: { name: "Riyadh Bhayat", dob: "3 Oct 1977", spouse: "Rezina Shaikh (24 July 1978)" },
    id: "riyadh",
    children: [
      { person: { name: "Muhammad Zaeem Bhayat", dob: "16 Aug 2013" }, id: "zaeem", children: [] },
      { person: { name: "Izra Bhayat", dob: "26 Sep 2017" }, id: "izra", children: [] }
    ]
  };

  const mariam = {
    person: { name: "Mariam Ally", dob: "18 Apr 1949", spouse: "Farouk Omar Bhayat (7 Oct 1949)" },
    id: "mariam",
    children: [fadia, zulweena, riyadh]
  };

  const ahmed = {
    person: { name: "Ahmed Ally", dob: "3 June 1915", spouse: "Khatija Esa (31 Dec 1921)" },
    id: "ahmed",
    children: [
      abdulSamat,
      { person: { name: "Jubeida Ally", dob: "6 Apr 1940" }, id: "jubeida", children: [] },
      farida,
      khairunnisa,
      fatima,
      zaiboonisa,
      mariam
    ]
  };

  const founder = {
    person: { name: "Ismail Ally", spouse: "Gadija Toefy (b. 1896)" },
    id: "founder",
    children: [ahmed]
  };

  return (
    <div className="p-6 bg-gradient-to-br from-orange-50 via-rose-50 to-amber-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-rose-600 via-orange-500 to-amber-600 bg-clip-text text-transparent mb-3">
          🌳 Ally Family Tree
        </h1>
        <p className="text-lg text-gray-700 mb-8">Click to expand/collapse family branches and explore your heritage</p>

        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-2xl p-8 border-4 border-gradient-to-r from-rose-300 to-amber-300 overflow-x-auto w-max">
          <Person person={founder.person} id={founder.id} children={founder.children} depth={0} />
        </div>
        
        <div className="mt-8 text-base text-gray-700 bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-2xl shadow-lg border-2 border-amber-300">
          <p className="font-semibold text-xl mb-3">✨ <strong>About This Tree:</strong></p>
          <p className="mt-2">This family tree spans 7+ generations, from Ismail Ally through his great-great-great grandchildren. Each generation is color-coded to help you navigate through the branches of your beautiful family heritage.</p>
          
          <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-white/70 rounded-xl p-4 text-center shadow-md">
              <div className="text-3xl font-bold text-rose-600">1</div>
              <div className="text-sm font-semibold text-gray-700 mt-1">Child</div>
            </div>
            <div className="bg-white/70 rounded-xl p-4 text-center shadow-md">
              <div className="text-3xl font-bold text-orange-600">7</div>
              <div className="text-sm font-semibold text-gray-700 mt-1">Grandchildren</div>
            </div>
            <div className="bg-white/70 rounded-xl p-4 text-center shadow-md">
              <div className="text-3xl font-bold text-amber-600">17</div>
              <div className="text-sm font-semibold text-gray-700 mt-1">Great Grandchildren</div>
            </div>
            <div className="bg-white/70 rounded-xl p-4 text-center shadow-md">
              <div className="text-3xl font-bold text-emerald-600">47</div>
              <div className="text-sm font-semibold text-gray-700 mt-1">Great Great Grandchildren</div>
            </div>
            <div className="bg-white/70 rounded-xl p-4 text-center shadow-md">
              <div className="text-3xl font-bold text-blue-600">12</div>
              <div className="text-sm font-semibold text-gray-700 mt-1">Great Great Great Grandchildren</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyTree;
