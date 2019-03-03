using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Blog.Models;
using Blog.IoC;
using System;


namespace Blog.Models
{
    public class BlogContext : DbContext
    {
        public string Id { get; set; } = Guid.NewGuid().ToString("N");

        public DbSet<Post> Posts { get; set; }
        public DbSet<Contact> Contacts { get; set; }

        public BlogContext(DbContextOptions<BlogContext> options) : base(options)
        {
            
        }

        //Defines relationships between tables
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

    }
}
