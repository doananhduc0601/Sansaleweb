﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eWebAPISanSale.Models
{
    public class RefreshRequet
    {
        public string AccessToken { get; set; }
        public string RefreshToken { get; set; }
    }
}
