import React from 'react';

const doner = () => {
  return (
    <div>
      {/* ✅ Donor Section */}
      <section id="donor" className="donor section" style={{ background: '#f7f9fc', padding: '60px 0' }}>
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center">
            <h2>Become a Donor</h2>
            <p>Support kidney patients by registering as a donor or learning more about kidney donation.</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form id="donor-form" method="POST" action="donor_submit.php">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" className="form-control" id="name" name="name" required="" />
                </div>
                <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <input type="number" className="form-control" id="age" name="age" required="" />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input type="text" className="form-control" id="address" name="address" required="" />
                </div>
                <div className="form-group">
                  <label htmlFor="blood-group">Blood Group</label>
                  <br />
                  <select name="blood" required="">
                    <option value="">Select</option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                    <option>O+</option>
                    <option>O-</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="donation-type">Are you a living donor?</label>
                  <select className="form-control" id="donation-type" name="donation_type" required="">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="health-issues">Any health issues or concerns?</label>
                  <textarea
                    className="form-control"
                    id="health-issues"
                    name="health_issues"
                    rows={4}
                    defaultValue={''}
                  />
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                  Register as Donor
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default doner;
