using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Blog.Models
{
    public class Contact
    {
        [Key]
        public int ContactId { get; set; }
        public string Name { get; set; }
        public string Company { get; set; }
        public string Email { get; set; }
    }
}
