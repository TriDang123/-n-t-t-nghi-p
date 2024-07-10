﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Windows.Forms.VisualStyles.VisualStyleElement;

namespace QuanLyQuanCafe.DTO
{
    public class Bill
    {
        public Bill (int id, DateTime? dateCheckin, DateTime? dateCheckout, int status, int discount = 0)
        {
            this.ID = id;
            this.DateCheckin = dateCheckin;
            this.DateCheckout = dateCheckout;
            this.Status = status;
            this.Discount = discount;
        }

        public Bill(DataRow row)
        {
            this.ID = (int)row["id"];
            this.DateCheckin = (DateTime?)row["dateCheckin"];

            var dateCheckOutTemp = row["dateCheckout"];
            if (dateCheckOutTemp.ToString() != "")

            this.DateCheckout = (DateTime?)dateCheckOutTemp;


            this.Status = (int)row["status"];

            if (row["discount"].ToString() != "")
               this.Discount = (int)row["discount"];
        }

        private int discount;

        public int Discount
        {
            get { return discount; }
            set { discount = value; }
        }


        private int status;
        
        public int Status
        {
            get { return status; }
            set { status = value;}
        }

        private DateTime? dateCheckout;

        public DateTime? DateCheckout
        {
            get { return DateCheckout; }
            set { dateCheckout = value; }
        }
        private DateTime? dateCheckin;

        public DateTime? DateCheckin
        {
            get { return DateCheckin; }
            set { dateCheckin = value; }
        }
        private int iD;

        public int ID
        {
            get { return iD; }
            set { iD = value; }
        }
    }
}
