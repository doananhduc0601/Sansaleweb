using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace eWebAPISanSale.Models
{
    public partial class Tag
    {
        public Tag()
        {
            Contents = new HashSet<Content>();
        }

        public string Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Content> Contents { get; set; }
    }
}
