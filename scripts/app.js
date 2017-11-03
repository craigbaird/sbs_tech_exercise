var originDataObject = {
  name: '',
  contact: '',
  street: '',
  city: '',
  state: '',
  postalCode: '',
  country: '',
  phone: '',
  email: '',
  incoterms: ''
};

var destinationDataObject = {
  name: '',
  contact: '',
  street: '',
  city: '',
  state: '',
  postalCode: '',
  country: '',
  phone: '',
  email: '',
};

var requesterDataObject = {
  name: '',
  department: '',
  location: '',
  phone: '',
  email: ''
};

$(document).ready(function(){

    $('#submitReqBtn').on('click', function(){
      getOriginFormData();
      getDestinationFormData();
      getRequesterFormData();
    });

  }); // end document.ready




function getOriginFormData() {
  originDataObject.name = $('#originName').val();
  originDataObject.contact = $('#originContact').val();
  originDataObject.street = $('#originStreet').val();
  originDataObject.city = $('#originCity').val();
  originDataObject.state = $('#originState').val();
  originDataObject.postalcode = $('#originPostalCode').val();
  originDataObject.country = $('#originCountry').val();
  originDataObject.phone = $('#originPhone').val();
  originDataObject.email = $('#originEmail').val();
  originDataObject.incoterms = $('#originIncoterms').val();
  console.log(originDataObject);
}

function getDestinationFormData() {
  destinationDataObject.name = $('#destinationName').val();
  destinationDataObject.contact = $('#destinationContact').val();
  destinationDataObject.street = $('#destinationStreet').val();
  destinationDataObject.city = $('#destinationCity').val();
  destinationDataObject.state = $('#destinationState').val();
  destinationDataObject.postalCode = $('#destinationPostalCode').val();
  destinationDataObject.country = $('#destinationCountry').val();
  destinationDataObject.phone = $('#destinationPhone').val();
  destinationDataObject.email = $('#destinationEmail').val();
  console.log(destinationDataObject);
}

function getRequesterFormData() {
  requesterDataObject.name = $('#requesterName').val();
  requesterDataObject.department = $('#requesterDepartment').val();
  requesterDataObject.location = $('#requesterLocation').val();
  requesterDataObject.phone = $('#requesterPhone').val();
  requesterDataObject.email = $('#requesterEmail').val();
  console.log(requesterDataObject);
}
