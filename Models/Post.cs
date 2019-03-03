using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Blog.Models
{
    public class Post
    {
        [Key]
        public int PostId { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        [NotMapped]
        public List<string> Comments = new List<string>();

        public string CommentsAsString
        {
            get
            {
                return String.Join(',', Comments);
            }
            set
            {
                Comments = value.Split(',').ToList();
            }
        }
        public int Likes { get; set; }
    }
}
