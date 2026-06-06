export interface Certificate {
  id: string;

  studentName: string;
  fatherName: string;

  enrollmentNo: string;

  college: string;
  university: string;

  internshipTitle: string;

  department: string;

  startDate: string;
  endDate: string;

  totalDuration: string;

  issueDate: string;
  place: string;

  branch: string;

  partnerName: string;

  status: "Valid" | "Expired";

  certificateImage: string;

  pdfUrl: string;
}

export const certificates: Certificate[] = [
  {
    id: "MSBR-26-GJ-172088",
    studentName: "Gautam Joshi",
    fatherName: "Prakash Chandra",
    enrollmentNo: "172088",
    college: "S.S. Jain Subodh Commerce & Arts College",
    university: "University of Rajasthan",
    internshipTitle: "Internship Completion Certificate",
    department: "Accounts, Audit & Taxation",
    startDate: "25/03/2026",
    endDate: "20/04/2026",
    totalDuration: "21 Days / 120 Hours",
    issueDate: "21/04/2026",
    place: "Indore",
    branch: "Head Office",
    partnerName: "CA. Mayur Sharma",
    status: "Valid",
    certificateImage: "/certificates/MSBR-26-GJ-172088.jpg",
    pdfUrl: "/certificates/MSBR-26-GJ-172088.pdf",
  },

  {
    id: "MSBR-26-AS-172089",
    studentName: "Aman Sharma",
    fatherName: "Rakesh Sharma",
    enrollmentNo: "172089",
    college: "Government Commerce College",
    university: "DAVV",
    internshipTitle: "GST Internship",
    department: "GST Compliance",
    startDate: "01/05/2026",
    endDate: "31/05/2026",
    totalDuration: "30 Days",
    issueDate: "31/05/2026",
    place: "Indore",
    branch: "Head Office",
    partnerName: "CA. Bharat Rachwani",
    status: "Valid",
    certificateImage: "/certificates/MSBR-26-AS-172089.jpg",
    pdfUrl: "/certificates/MSBR-26-AS-172089.pdf",
  },

  {
    id: "MSBR-26-RJ-172090",
    studentName: "Rohit Jain",
    fatherName: "Mahesh Jain",
    enrollmentNo: "172090",
    college: "Prestige Institute",
    university: "DAVV",
    internshipTitle: "Audit Internship",
    department: "Audit & Assurance",
    startDate: "01/06/2026",
    endDate: "30/06/2026",
    totalDuration: "30 Days",
    issueDate: "30/06/2026",
    place: "Indore",
    branch: "Head Office",
    partnerName: "CA. Mayur Sharma",
    status: "Valid",
    certificateImage: "/certificates/MSBR-26-RJ-172090.jpg",
    pdfUrl: "/certificates/MSBR-26-RJ-172090.pdf",
  },

  {
    id: "MSBR-26-PM-172091",
    studentName: "Priya Mehta",
    fatherName: "Suresh Mehta",
    enrollmentNo: "172091",
    college: "IPS Academy",
    university: "DAVV",
    internshipTitle: "Taxation Internship",
    department: "Direct Tax",
    startDate: "01/07/2026",
    endDate: "31/07/2026",
    totalDuration: "30 Days",
    issueDate: "31/07/2026",
    place: "Indore",
    branch: "Head Office",
    partnerName: "CA. Bharat Rachwani",
    status: "Valid",
    certificateImage: "/certificates/MSBR-26-PM-172091.jpg",
    pdfUrl: "/certificates/MSBR-26-PM-172091.pdf",
  },

  {
    id: "MSBR-26-AK-172092",
    studentName: "Ankit Kumar",
    fatherName: "Vijay Kumar",
    enrollmentNo: "172092",
    college: "SAGE University",
    university: "SAGE",
    internshipTitle: "Accounts Internship",
    department: "Accounts",
    startDate: "01/08/2026",
    endDate: "31/08/2026",
    totalDuration: "30 Days",
    issueDate: "31/08/2026",
    place: "Indore",
    branch: "Head Office",
    partnerName: "CA. Mayur Sharma",
    status: "Valid",
    certificateImage: "/certificates/MSBR-26-AK-172092.jpg",
    pdfUrl: "/certificates/MSBR-26-AK-172092.pdf",
  },
];
