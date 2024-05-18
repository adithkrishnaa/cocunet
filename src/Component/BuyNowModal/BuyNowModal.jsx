import React, { useState, useEffect } from "react";
import { Button, Dialog, DialogBody } from "@material-tailwind/react";

const BuyNowModal = ({
  addressInfo,
  setAddressInfo,
  buyNowFunction,
  totalQuantity,
  cartTotal,
}) => {
  const [open, setOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const validPincodes = [
    641001, 641002, 641003, 641004, 641005, 641006, 641007, 641008, 641009,
    641010, 641011, 641012, 641013, 641014, 641015, 641016, 641017, 641018,
    641019, 641020, 641021, 641022, 641023, 641024, 641025, 641026, 641027,
    641028, 641029, 641030, 641031, 641032, 641033, 641034, 641035, 641036,
    641037, 641038, 641039, 641040, 641041, 641042, 641043, 641044, 641045,
    641046, 641047, 641048, 641049, 641050, 641051, 641052, 641053, 641054,
    641055, 641056, 641057, 641058, 641059, 641060, 641061, 641062, 641063,
    641064, 641065, 641066,
  ];

  useEffect(() => {
    const enteredPincode = parseInt(addressInfo.pincode);
    const pincodeIsValid = validPincodes.includes(enteredPincode);

    if (pincodeIsValid) {
      setIsDisabled(false);
    } else {
      setIsDisabled(totalQuantity < 250);
    }
  }, [addressInfo.pincode, totalQuantity]);

  const handleOpen = () => setOpen(!open);

  const handlePayment = () => {
    const options = {
      key: "rzp_test_mfndzVHR5UdTrI", // Replace with your Razorpay key ID
      amount: cartTotal * 100, // Amount is in paise
      currency: "INR",
      name: "Eyarkai Banangal",
      description: "Purchase Description",
      handler: function (response) {
        console.log(response);
        buyNowFunction();
      },
      prefill: {
        name: addressInfo.name,
        email: "customer@example.com", // Replace with customer's email if available
        contact: addressInfo.mobileNumber,
      },
      notes: {
        address: addressInfo.address,
      },
      theme: {
        color: "#798F46",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      console.error(response.error);
      alert("Payment failed: " + response.error.description);
    });
    rzp1.open();
  };

  return (
    <>
      <Button
        type="button"
        onClick={handleOpen}
        className={`w-full px-4 py-3 text-center text-gray-100 bg-[#798F46] border border-transparent dark:border-gray-700 hover:border-transparent hover:text-white hover:bg-[#353434] rounded-xl`}>
        Buy now
      </Button>
      <Dialog open={open} handler={handleOpen} className="bg-[#798F46]">
        <DialogBody className="space-y-3">
          <input
            type="text"
            name="name"
            value={addressInfo.name}
            onChange={(e) =>
              setAddressInfo({ ...addressInfo, name: e.target.value })
            }
            placeholder="Enter your name"
            className="bg-white border border-transparent px-2 py-2 w-full rounded-md outline-none text-[#798F46] placeholder-[#798F46]"
          />
          <input
            type="text"
            name="address"
            value={addressInfo.address}
            onChange={(e) =>
              setAddressInfo({ ...addressInfo, address: e.target.value })
            }
            placeholder="Enter your address"
            className="bg-white border border-transparent px-2 py-2 w-full rounded-md outline-none text-[#798F46] placeholder-[#798F46]"
          />
          <input
            type="number"
            name="pincode"
            value={addressInfo.pincode}
            onChange={(e) =>
              setAddressInfo({ ...addressInfo, pincode: e.target.value })
            }
            placeholder="Enter your pincode"
            className="bg-white border border-transparent px-2 py-2 w-full rounded-md outline-none text-[#798F46] placeholder-[#798F46]"
          />
          <input
            type="text"
            name="mobileNumber"
            value={addressInfo.mobileNumber}
            onChange={(e) =>
              setAddressInfo({ ...addressInfo, mobileNumber: e.target.value })
            }
            placeholder="Enter your mobile number"
            className="bg-white border border-transparent px-2 py-2 w-full rounded-md outline-none text-[#798F46] placeholder-[#798F46]"
          />
          <Button
            type="button"
            onClick={() => {
              handleOpen();
              if (!isDisabled) handlePayment();
            }}
            className={`w-full px-4 py-3 text-center text-gray-100 bg-[#353434] border border-transparent dark:border-gray-700 rounded-lg ${
              isDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isDisabled}>
            Confirm Order
          </Button>
          <p className="text-sm px-2 text-red-800 font-medium">
            *Orders require a minimum quantity of 250 units outside the
            Coimbatore region.
          </p>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default BuyNowModal;
