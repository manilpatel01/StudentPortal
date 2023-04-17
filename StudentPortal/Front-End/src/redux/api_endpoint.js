export class APIENDPOINTS {
  static authentication = () => '/api/authenticate';
  static studentCredentials = () => '/api/student/data';
  static adminCredentials = () => '/api/admin/data';
  static adminDashBord = () => '/api/admin/adminDashbord';
  static studentRegistration = () => '/api/registerStudent';
  static studentUpdation = () => '/api/student/updateStudent';
  static adminRegistration = () => '/api/registerFaculty';
  static updatePhoto = (domain) => '/api' + domain + '/changePhoto';
  static updateSign = (domain) => '/api/' + domain + '/changeSign';
  static changePassword = (domain) => `/api${domain}/changePassword`;
  static requestFeeRefund = () => '/api/student/feeRefund';
  static requestCertificate = (type) => `/api/student/DocumentSubmit/${type}`;
  static forgetPassword = () => `/api/forgotPassword`;
  static pendingDocument = () => '/api/admin/pendingDocument';
  static approveFeeRefund = () => '/api/admin/FeeRefundApprove';
  static documentApprove = () => '/api/admin/DocumentApprove';
  static findDocument = () => '/api/admin/findDocument';
  static pendingRegistrationList = () => '/api/admin/pendingRegList';
  static searchStudent = () => '/api/admin/searchStudent';
  static searchAdmin = () => '/api/admin/sshead/searchAllAdmin';
  static importExcel = () => '/api/importExcel';
  static getStudentByEnrollment = (enrollment) =>
    `/api/getStudentByEnrollment?er=${enrollment}`;
  static facultyApprove = () => '/api/admin/facultyApprove';
  static getStudentFromFacultyBranch = (enrollment) =>
    `/api/admin/request/student/${enrollment}`;
  static detainStudent = (enrollment) =>
    `/api/admin/detain/student/${enrollment}`;
  static progressionBySem = () => `/api/admin//progressionBySem`;
}
