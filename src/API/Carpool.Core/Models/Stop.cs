﻿using Carpool.Core.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace Carpool.Core.Models
{
	public class Stop : ParentModel
	{
		public User User { get; set; }
		public Coordinates Coordinates { get; set; }
	}
}